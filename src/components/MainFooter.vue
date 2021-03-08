<template>
  <v-footer data-testid="main-footer" padless color="primary" dark>
    <v-col class="text-center" cols="12">
      {{ year }} — <strong>{{ label }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: ['label', 'year']
}
</script>
