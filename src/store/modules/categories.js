import api from '@/network/api.js'

export const namespaced = true

export const state = {
  categories: []
}

export const mutations = {
  SET_CATEGORIES(state, data) {
    state.categories = data
  }
}

export const actions = {
  async fetchCategories({ commit, dispatch }, filters) {
    try {
      const { data } = await api.fetchCategoris(filters)
      commit('SET_CATEGORIES', data.data)
    } catch (error) {
      dispatch(
        'notification/add',
        {
          type: 'error',
          message:
            error?.response?.data?.message ?? 'Unable to fetch categories'
        },
        { root: true }
      )
    }
  }
}

export const getters = {
  categories: state => state.categories
}
