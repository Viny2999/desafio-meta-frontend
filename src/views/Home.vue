<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="grey lighten-3"
      height=90
    >
      <button class="button-left">
        <img class="img" src="../assets/strange-button.png">
      </button>

      <span class="first-divider" />

      <button class="button" v-if="!shieldButton" @click="clickShield">
        <v-icon style="font-size: 19px;">fas fa-shield-alt</v-icon>
      </button>

      <button class="button shield-button-selected" v-if="shieldButton">
        <v-icon style="font-size: 19px;color: white">fas fa-shield-alt</v-icon>
      </button>
      
      <button class="button" v-if="!userButton" @click="clickUser">
        <v-icon style="font-size: 19px;">fas fa-user</v-icon>
      </button>
      
      <button class="button user-button-selected" v-if="userButton">
        <v-icon style="font-size: 19px;color: white">fas fa-user</v-icon>
      </button>

      <v-toolbar
        floating
        color="grey lighten-3"
        flat
        outlined
        style="margin-left: 20px"
      >
        <v-text-field
          hide-details
          single-line
          placeholder="Pesquisar..."
        >
        </v-text-field>
        <v-icon style="font-size: 19px">fa fa-search</v-icon>
        
      </v-toolbar>
      <v-spacer></v-spacer>

      <button class="button" style="margin-right:8px" @click.stop="right = !right">
        <v-icon style="font-size: 19px;">fas fa-sliders-h</v-icon>
      </button>

      <button class="add-user-button">
        <v-icon style="font-size: 15px;color: white">fas fa-user</v-icon>
        <span class="add-user-button-text">INCLUIR USUÁRIO</span>
      </button>

      <span class="last-divider" />

      <v-icon class="icons">fa fa-home</v-icon>
      <v-icon class="icons">fa fa-cog</v-icon>
      <v-icon class="icons">fa fa-power-off</v-icon>
    </v-app-bar>

    <v-main 
      style="background-color: #e0e0e0"
    >
      <v-card 
        class="card-style"
        height=50
      >
        <div class="row">
          <div class="col-1">

          </div>
          <div class="col-1 text-center">
            <div class="ml-2 table-header">USUÁRIO</div>
          </div>
          <div class="col-3">
            <div class="ml-2 table-header">EMAIL</div>
          </div>
          <div class="col-2 text-center table-header">
            DATA INCLUSÃO
          </div>
          <div class="col-2 text-center table-header">
            DATA ALTERAÇÃO
          </div>
          <div class="col-1">
            <div class="ml-2 table-header">REGRAS</div>
          </div>
          <div class="col-1">
            <div class="ml-2 table-header">STATUS</div>
          </div>
          <div class="col-1">
            <div class="ml-2 table-header">AÇÕES</div>
          </div>
        </div>
        <v-list>
          <v-list-item-group v-model="user" color="primary">
            <v-list-item
              v-for="user of users"
              :key="user"
            >
              <div class="row">
                <div class="col-1">
                  <input type="checkbox" id="checkbox">
                </div>
                <div class="col-1">
                  <div class="ml-2"> {{ user.usuario }} </div>
                </div>
                <div class="col-3">
                 {{ user.email }}
                </div>
                <div class="col-2 text-center">
                  {{ user.dtInclusao }}
                </div>
                <div class="col-2 text-center">
                  {{ user.dtAlteracao }}
                </div>
                <div class="col-1 text-center">
                  {{ user.regras }}
                </div>
                <div class="col-1 text-center" v-if="user.status == true" style="color: green">
                  Ativo
                </div>
                <div class="col-1 text-center" v-else style="color: red">
                  Inativo
                </div>
                <div class="col-1 text-center">
                  <v-icon>fas fa-ellipsis-h</v-icon>
                </div>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-main>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
      width=450
      color="#e0e0e0"
    >
      <v-app-bar
        app
        clipped-right
        color="grey lighten-3"
        height=90
      >
        <v-icon style="font-size: 19px;">fas fa-sliders-h</v-icon>
        <span class="filtros">FILTROS</span>
        <v-spacer></v-spacer>
        <button class="button" @click.stop="right = !right">
          <v-icon>mdi-close</v-icon>
        </button>
      </v-app-bar>
      <v-content>
        <div class="filtro-top">
          Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.
        </div>
        <div class="filtro-options">
          <v-icon>far fa-calendar-alt</v-icon>
          <span class="filtro-text">TODAS AS DATAS DE INCLUSÃO</span>
        </div>
        <v-divider></v-divider>
        <div class="filtro-options">
          <v-icon>far fa-calendar-alt</v-icon>
          <span class="filtro-text">TODAS AS DATAS DE ALTERAÇÕES</span>
        </div>
        <v-divider></v-divider>
        <div class="filtro-options">
          <v-icon>fas fa-toggle-on</v-icon>
          <span class="filtro-text">ATIVOS E INATIVOS</span>
        </div>
        <v-divider></v-divider>
        <button class="aplicar-button">APLICAR</button>
      </v-content>
    </v-navigation-drawer>

    <Footer />
  </v-app>
</template>

<script>
  import Footer from "@/components/Footer.vue";

  export default {
    data () {
      return {
        loading: false,
        right: false,
        userButton: true,
        shieldButton:false
      }
    },
    methods: {
      clickUser() {
        this.userButton = true
        this.shieldButton = false
      },
      clickShield() {
        this.shieldButton = true
        this.userButton = false
      }
    },
    computed: {
      users () {
        return this.$store.state.users
      }
    },
    created () {
      this.loading = true
      this.$store.dispatch('fetchUsers')
        .then(users => {
          this.loading = false
        })
    },
    components: {
      Footer
    }
  }
</script>

<style lang="sass">
  .button
    background-color: white
    border-radius: 5px
    padding: 13px 20px
  .add-user-button
    background-color: #f00f69
    border-radius: 5px
    padding: 13px 20px
  .add-user-button-text
    margin-left: 10px
    font-size: 14px
    color: white
  .img 
    max-width: 80%
    height: auto
  .shield-button-selected
    background: linear-gradient(to top right, #ff0066 -2%, #ff6600 100%)
  .user-button-selected
    background: linear-gradient(to top right, #ff0066 -2%, #ff6600 100%)
  .button-left
    background: linear-gradient(to top right, #ff0066 -2%, #ff6600 100%)
    border-radius: 30px/10px
    padding: 5px 5px
    margin-left: 20px
  ::placeholder
    color: grey !important
  .first-divider
    display: inline-block
    width: 2px
    background-color: grey
    margin-left: 2%
    margin-right: 2%
    height: 1.4em
  .last-divider 
    display: inline-block
    width: 2px
    background-color: grey
    margin-left: 2%
    margin-right: 1%
    height: 1.4em
  .icons
    margin-left: 1%
  .filtros
    font-family: 'MuseoModerno', cursive
    font-size: 18px
    margin-left: 15px
  .filtro-top
    font-style: italic
    margin-top: 40px
    margin-left: 15px
    margin-right: 15px
    margin-bottom: 40px
  .filtro-options
    margin-top: 20px
    margin-left: 15px
    margin-right: 15px
    margin-bottom: 20px
  .filtro-text
    margin-left: 17px
    font-weight: bold
    color: #f00f69
  .aplicar-button
    margin: 15px
    background-color:transparent
    border-radius:6px
    border:1px solid #f00f69
    display:inline-block
    cursor:pointer
    color:#f00f69
    font-family:Arial
    font-size:17px
    font-weight:bold
    padding:14px 175px
    text-decoration:none
    text-shadow:0px 1px 0px #f00f69
  .card-style
    margin-top: 30px
    margin-left: 40px
    margin-right: 40px
  .table-header
    font-weight: bold
    font-size: 13px
</style>