<template>
  <div>
    <p-filters />

    <div class="mt-40">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
          v-for="(item, index) in countries"
          :key="index"
        >
          <p-country-item :info="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PFilters from '@page-components/home/Filters/Filters'
import PCountryItem from '@page-components/home/CountryItem/CountryItem'
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  components: { PFilters, PCountryItem },

  head() {
    return {
      title: 'home'
    }
  },

  watchQuery: ['region', 'search'],

  async fetch({ store, query }) {
    const { search, region } = query
    await store.dispatch('countries/clearCountries')

    if (region || search) {
      if (region) {
        await store.dispatch('countries/region', region)
      }
      if (search) {
        await store.dispatch('countries/search', search)
      }
    } else {
      await store.dispatch('countries/readAll')
    }
  },

  computed: {
    ...mapGetters({
      countries: 'countries/countries'
    })
  }
}
</script>
