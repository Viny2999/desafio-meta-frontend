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
        Incluir Usuário
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
        style="margin:10px"
        height=50
      >
        <div class="row">
          <div class="col-1">

          </div>
          <div class="col-1 text-center">
            <div class="ml-2">Usuário</div>
          </div>
          <div class="col-3">
            <div class="ml-2">Email</div>
          </div>
          <div class="col-2 text-center">
            Data Inclusão
          </div>
          <div class="col-2 text-center">
            Data Alteração
          </div>
          <div class="col-1">
            <div class="ml-2">Regras</div>
          </div>
          <div class="col-1">
            <div class="ml-2">Status</div>
          </div>
          <div class="col-1">
            <div class="ml-2">Ações</div>
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
    >
      <v-app-bar
        app
        clipped-right
        color="grey lighten-3"
        height=90
      >
        Filtros
        <v-icon @click.stop="right = !right">mdi-close</v-icon>
      </v-app-bar>
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
    border-radius: 9px
    padding: 13px 20px
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
    padding: 2px 5px
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
</style>