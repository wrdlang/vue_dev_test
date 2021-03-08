<template>
  <v-app>
    <MainAppBar :title="appTitle" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <MainFooter :label="appTitle" :year="currentYear" />
  </v-app>
</template>

<script>
import MainAppBar from '@/components/MainAppBar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',

  components: { MainAppBar, MainFooter },

  data: () => {
    return {
      appTitle: 'Vue Dev Test',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
