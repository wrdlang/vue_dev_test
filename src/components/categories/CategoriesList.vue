<template>
  <v-card class="mx-auto" max-width="500" tile>
    <v-list rounded>
      <v-subheader>CATEGORIES</v-subheader>
      <CategoryListItem
        v-for="cat in categories"
        :key="cat.id"
        :name="cat.name"
        :avatar="cat.img_url"
        :slug="cat.slug"
      />
    </v-list>
  </v-card>
</template>

<script>
import CategoryListItem from '@/components/categories/CategoryListItem.vue'
export default {
  components: {
    CategoryListItem
  },
  props: {
    categories: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
