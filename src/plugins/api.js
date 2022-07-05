import CountriesRestApi from '@api/countries'

export default ({ $axios }, inject) => {
  const api = {
    countries: CountriesRestApi($axios)
  }

  inject('api', api)
}
