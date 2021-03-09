<template>
  <v-container fluid class="white">
    <v-container>
      <v-row v-if="loading" class="mb-6">
        <v-col v-for="n in 5" :key="n" cols="12" md="6" lg="4">
          <LoadingSkeleton type="card, list-item-two-line, table-tfoot" />
        </v-col>
      </v-row>

      <v-row v-if="!loading" class="mb-6">
        <v-col v-for="prank in pranks" :key="prank.id" cols="12" md="6" lg="4">
          <PrankItem
            :title="prank.title"
            :image="prank.img_url"
            :description="prank.description"
            :tags="prank.tags"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingSkeleton from '@/components/LoadingSkeleton.vue'
import PrankItem from '@/components/pranks/PrankItem.vue'

export default {
  name: 'CategoryPranks',
  components: {
    LoadingSkeleton,
    PrankItem
  },
  async created() {
    await this.fetchPranks(this.$route.params.categoryslug)
    this.loading = false
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters('pranks', ['pranks'])
  },
  methods: {
    ...mapActions('pranks', ['fetchPranks'])
  },
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
