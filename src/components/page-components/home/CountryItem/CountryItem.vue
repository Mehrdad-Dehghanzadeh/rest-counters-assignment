<template>
  <article class="country-item">
    <nuxt-link class="display-block" :to="`/country/${info.name}`">
      <img
        class="country-item__flag"
        :src="info.flags.svg"
        :alt="info.name"
        loading="lazy"
      />

      <div class="px-16 py-32">
        <h2 class="country-item__title">{{ info.name }}</h2>

        <ul class="details-list">
          <li class="details-list__item">
            <span class="details-list__title">Population</span>
            <span>{{ info.population | price }}</span>
          </li>

          <li class="details-list__item">
            <span class="details-list__title">region</span>
            <span>{{ info.region }}</span>
          </li>

          <li class="details-list__item">
            <span class="details-list__title">capital</span>
            <span>{{ capital }}</span>
          </li>
        </ul>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'CountryItem',

  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    capital() {
      return this.info.capital && this.info.capital.length
        ? this.info.capital.join(', ')
        : ''
    }
  }
}
</script>

<style lang="scss" src="./CountryItem.scss" />
