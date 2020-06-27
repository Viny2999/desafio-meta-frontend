<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
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
    <v-icon @click.stop="right = !right">mdi-close</v-icon>
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