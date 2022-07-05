<template>
  <div class="borders">
    <h3 class="borders__title">Border Countries</h3>
    <div class="borders__content">
      <k-btn
        class="borders__links"
        tag="nuxt-link"
        v-for="(item, index) in borders"
        :key="index"
        :to="`/country/${item}`"
      >
        {{ item }}
      </k-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Borders',

  computed: {
    ...mapGetters({
      borders: 'countries/borders'
    })
  }
}
</script>

<style src="./Borders.scss" lang="scss" />
