export const namespaced = true

export const state = {
  notifications: []
}

let nextId = 1

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    })
  },
  CLEAR(state) {
    state.notifications = []
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  clear({ commit }, notificationToRemove) {
    commit('CLEAR', notificationToRemove)
  }
}
