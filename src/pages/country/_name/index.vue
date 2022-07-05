<template>
  <article class="country-page" id="country-page">
    <k-btn @click="$router.back()" icon="arrow-left">back</k-btn>

    <div class="country-page__content">
      <div class="row">
        <div class="col-md-5">
          <img
            class="country-page__flag"
            :src="flag"
            :alt="title"
            loading="lazy"
          />
        </div>

        <section class="col-md-7">
          <h1 class="country-page__title">{{ title }}</h1>
          <p-details-list />
          <p-borders />
        </section>
      </div>
    </div>
  </article>
</template>

<script>
import PDetailsList from '@page-components/country/DetailsList/DetailsList'
import PBorders from '@page-components/country/Borders/Borders'

export default {
  name: 'CountryPage',
  components: { PDetailsList, PBorders },

  head() {
    return {
      title: this.title
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('countries/clear')
    const { name } = params

    try {
      const { data } = await store.dispatch('countries/getInfo', name)

      if (data[0].borders) {
        await store.dispatch('countries/getBorders', {
          codes: data[0].borders.join()
        })
      }
    } catch (error) {
      throw error
    }
  },

  computed: {
    info() {
      return this.$store.getters['countries/info']
    },
    flag() {
      const flag = this.info.flags
      return typeof flag == 'object' ? flag.svg || flag.png : flag
    },

    title() {
      return this.info.name
    }
  }
}
</script>

<style src="./style.scss" lang="scss" />
