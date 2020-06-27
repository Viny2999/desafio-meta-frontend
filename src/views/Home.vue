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

      <v-toolbar
        floating
        color="grey lighten-3"
        flat
        outlined
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

      <button class="button" @click.stop="right = !right">
        <v-icon style="font-size: 19px">fas fa-sliders-h</v-icon>
      </button>

      <button class="user-button">
        <v-icon style="font-size: 19px;color: white">fas fa-user</v-icon>
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
      <!--Here-->
      <div>
      <span v-if="loading">Loading…</span>
        <ul v-else>
          <li
            v-for="user in users"
            :key="user.usuario"
          >
            <h1>{{ user.usuario }}</h1>
          </li>
        </ul>
      </div>
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
    border-radius: 9px
    padding: 13px 20px
  .user-button
    background-color: #f00f69
    border-radius: 9px
    padding: 13px 20px
  .img 
    max-width: 80%
    height: auto
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
    margin-right: 1%
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