<template>
  <v-container>
    <LoadingSkeleton v-if="loading" />
    <CategoriesList v-if="!loading" :categories="categories" />
    <FullScreenDialog :show="showModal" title="Categories">
      <router-view></router-view>
    </FullScreenDialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingSkeleton from '@/components/categories/LoadingSkeleton.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'
import FullScreenDialog from '@/components/FullScreenDialog.vue'

export default {
  name: 'Categories',
  components: {
    LoadingSkeleton,
    FullScreenDialog,
    CategoriesList
  },
  async created() {
    await this.fetchCategories(this.filters)
    this.loading = false
  },
  data() {
    return {
      loading: true,
      slugs: [
        'view-all-pranks',
        'new-prank-calls',
        'food-restaurant-prank-calls'
      ],
      showModal: this.$route.meta.showModal
    }
  },
  computed: {
    filters() {
      return `filters[slug][]=${this.slugs.join('&filters[slug][]=')}`
    },
    ...mapGetters('categories', ['categories'])
  },
  methods: {
    ...mapActions('categories', ['fetchCategories'])
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
