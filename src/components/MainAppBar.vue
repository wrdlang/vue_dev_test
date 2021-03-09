<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title data-testid="appbar-title">{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
