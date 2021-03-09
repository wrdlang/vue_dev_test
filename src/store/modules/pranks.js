import api from '@/network/api.js'

export const namespaced = true

export const state = {
  pranks: []
}

export const mutations = {
  SET_PRANKS(state, data) {
    state.pranks = data
  }
}

export const actions = {
  async fetchPranks({ commit, dispatch }, slug) {
    try {
      const { data } = await api.fetchPrankIdeas(slug, 1, 15)
      commit('SET_PRANKS', data.data)
    } catch (error) {
      dispatch(
        'notification/add',
        {
          type: 'error',
          message: error?.response?.data?.message ?? `Unable to fetch ${slug}`
        },
        { root: true }
      )
    }
  }
}

export const getters = {
  pranks: state => state.pranks
}
