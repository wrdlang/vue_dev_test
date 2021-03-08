<template>
  <v-container>
    <v-skeleton-loader
      class="mx-auto"
      max-width="500"
      type="card-heading, list-item-avatar, list-item-avatar, list-item-avatar"
    ></v-skeleton-loader>

    <v-dialog
      v-model="showModal"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="handleClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Category Pranks</v-toolbar-title>
      </v-toolbar>
      <router-view></router-view>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      showModal: this.$route.meta.showModal
    }
  },
  methods: {
    handleClose() {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.meta'({ showModal }) {
      this.showModal = showModal
    }
  },
  head: {
    title: function() {
      return {
        inner: 'Categories'
      }
    },
    meta: [{ name: 'description', content: 'Categories list', id: 'desc' }]
  }
}
</script>

<style></style>
