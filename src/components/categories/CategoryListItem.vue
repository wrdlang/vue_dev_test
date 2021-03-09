<template>
  <v-list-item data-testid="list-item" :to="slug">
    <v-list-item-avatar>
      <v-img data-testid="list-item-avatar" :alt="name" :src="avatar"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title data-testid="list-item-title">{{
        name
      }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    }
  }
}
</script>
