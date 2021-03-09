<template>
  <v-card>
    <v-img height="250" :alt="title" :src="image"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">• {{ tags.join(', ') }}</div>

      <div>
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
