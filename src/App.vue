<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vue Dev Test</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer padless color="primary" dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vue Dev Test</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
