<template>
  <article class="country-item">
    <nuxt-link class="display-block" :to="`/countery/${info.name}`">
      <img
        class="country-item__flag"
        :src="info.flags.svg"
        :alt="info.name"
        loading="lazy"
      />

      <div class="px-16 py-32">
        <h2 class="country-item__title">{{ info.name }}</h2>

        <ul class="country-item-details">
          <li class="country-item-details__item">
            <span class="country-item-details__title">Population</span>
            <span>{{ info.population }}</span>
          </li>

          <li class="country-item-details__item">
            <span class="country-item-details__title">region</span>
            <span>{{ info.region }}</span>
          </li>

          <li class="country-item-details__item">
            <span class="country-item-details__title">capital</span>
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
