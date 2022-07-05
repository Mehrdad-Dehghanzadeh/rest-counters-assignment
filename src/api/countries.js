export default ($axios) => ({
  name(name, params) {
    return $axios.get(`/name/${name}`, { params })
  },

  readAll() {
    return $axios.get('/all')
  },

  region(region) {
    return $axios.get(`/region/${region}`)
  }
})
