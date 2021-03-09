<template>
  <v-app>
    <MainAppBar :title="appTitle" />
    <v-main>
      <v-alert
        :type="notification.type"
        v-for="notification in notifications"
        :key="notification.id"
      >
        {{ notification.message }}
      </v-alert>
      <router-view></router-view>
    </v-main>
    <MainFooter :label="appTitle" :year="currentYear" />
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import MainAppBar from '@/components/MainAppBar.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'App',
  components: { MainAppBar, MainFooter },
  mounted() {
    this.timeout = setTimeout(() => this.clear(), 3000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  data: () => {
    return {
      appTitle: 'Vue Dev Test',
      currentYear: new Date().getFullYear(),
      timeout: null
    }
  },
  methods: mapActions('notification', ['clear']),
  computed: mapState('notification', ['notifications'])
}
</script>
