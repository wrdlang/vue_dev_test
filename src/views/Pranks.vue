<template>
  <v-card>
    <v-container>
      <v-row class="mb-6">
        <v-col v-for="n in 5" :key="n" cols="12" md="6" lg="3">
          <v-skeleton-loader
            type="card, list-item-two-line, table-tfoot"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'CategoryPranks',
  head: {
    title: function() {
      return {
        inner: 'Category Pranks'
      }
    },
    meta: [{ name: 'description', content: 'Category Prank list', id: 'desc' }]
  }
}
</script>
