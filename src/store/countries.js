import { deepClone } from '@helpers/object'

export const state = () => ({
  countries: []
})

export const getters = {
  countries: ({ countries }) => countries
}

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = deepClone(payload).map(
      ({ name, region, flags, population, capital }) => {
        return {
          name: name.official,
          region,
          flags,
          population,
          capital
        }
      }
    )
  },

  CLEAR_COUNTRIES(state) {
    state.countries = []
  }
}

export const actions = {
  readAll({ commit }) {
    return new Promise((resolve, reject) => {
      this.$api.countries
        .readAll()
        .then((res) => {
          commit('SET_COUNTRIES', res.data)
          resolve(res)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  },

  search({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$api.countries
        .name(payload, { fullname: true })
        .then((res) => {
          commit('SET_COUNTRIES', res.data)
          resolve(res)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  },

  region({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$api.countries
        .region(payload)
        .then((res) => {
          commit('SET_COUNTRIES', res.data)
          resolve(res)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  },

  clearCountries({ commit }) {
    commit('CLEAR_COUNTRIES')
  }
}
