<template>
  <div class="row">
    <div class="col-md-6">
      <ul class="details-list">
        <li class="details-list__item">
          <span class="details-list__title">native name</span>
          <span>{{ nativeName }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">Population</span>
          <span>{{ info.population | price }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">region</span>
          <span>{{ info.region }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">sub Region</span>
          <span>{{ info.subregion }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">capital</span>
          <span>{{ capital }}</span>
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      <ul class="details-list">
        <li class="details-list__item">
          <span class="details-list__title">Top Level Domain</span>
          <span>{{ topLevelDomain }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">currencies</span>
          <span>{{ currencies }}</span>
        </li>

        <li class="details-list__item">
          <span class="details-list__title">languages</span>
          <span>{{ languages }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DetailsList',

  computed: {
    ...mapGetters({
      info: 'countries/info'
    }),

    capital() {
      return this.info.capital && this.info.capital.length
        ? this.info.capital.join(', ')
        : ''
    },

    nativeName() {
      let val = ''
      if (this.info.nativeName) {
        const key = Object.keys(this.info.nativeName)
        val = key
          .map((item) => {
            return this.info.nativeName[item].common
          })
          .join(', ')
      }

      return val
    },

    languages() {
      let val = ''
      if (this.info.languages) {
        val = Object.values(this.info.languages).join(', ')
      }

      return val
    },

    topLevelDomain() {
      let val = ''
      if (this.info.topLevelDomain) {
        val = this.info.topLevelDomain.join(', ')
      }
      return val
    },

    currencies() {
      let val = ''
      if (this.info.currencies) {
        const key = Object.keys(this.info.currencies)
        val = key
          .map((item) => {
            return this.info.currencies[item].name
          })
          .join(', ')
      }

      return val
    }
  }
}
</script>

<style></style>
