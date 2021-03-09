<template>
  <v-card class="mx-auto" max-width="500" tile>
    <v-skeleton-loader :type="type"></v-skeleton-loader>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
