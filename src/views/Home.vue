<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="grey lighten-5"
      dark
      height=90
    >
      <button class="button-left">Oi</button>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click.stop="right = !right">mdi-exit-to-app</v-icon>
    </v-app-bar>

    <v-main>
     <!--Here-->
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
        color="grey lighten-5"
        dark
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
    components: {
      Footer
    },
    data: () => ({
      right: false,
    }),
  }
</script>

<style lang="sass">
  .button-left
    background: linear-gradient(to top right, #ff0066 -2%, #ff6600 100%)
    border-radius: 30px/10px
    padding: 11px 21px
    margin-left: 20px
</style>