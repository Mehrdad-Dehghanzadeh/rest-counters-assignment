export const state = () => ({
  info: {},
  borders: []
})

export const getters = {
  info: ({ info }) => info,
  borders: ({ borders }) => borders
}

export const mutations = {
  SET_INFO(state, paylod) {
    state.info = {
      name: paylod.name.official,
      nativeName: paylod.name.nativeName,
      population: paylod.population,
      flags: paylod.flags,
      capital: paylod.capital,
      region: paylod.region,
      subregion: paylod.subregion,
      languages: paylod.languages,
      currencies: paylod.currencies,
      topLevelDomain: paylod.tld
    }
  },

  SET_BORDERS(state, paylod) {
    state.borders = paylod.map(({ name }) => name.common)
  },

  CLEAR_STATE(state) {
    state.info = {}
    state.borders = []
  }
}

export const actions = {
  getInfo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$api.countries
        .name(payload, { fullText: true })
        .then((res) => {
          commit('SET_INFO', res.data[0])
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  getBorders({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$api.countries
        .code(payload)
        .then((res) => {
          commit('SET_BORDERS', res.data)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  clear({ commit }) {
    commit('CLEAR_STATE')
  }
}
