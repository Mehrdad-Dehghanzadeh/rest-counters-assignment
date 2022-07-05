<template>
  <div class="row">
    <div class="col-lg-10 col-md-8 col-12">
      <k-search-box @search="search" />
    </div>

    <div class="col-lg-2 col-md-4 col-6 md-mt-32">
      <k-select
        v-model="select"
        :items="items"
        placeholder="Filter by Region"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',

  data() {
    return {
      items: [
        { id: 'Africa', title: 'Africa' },
        { id: 'Americas', title: 'Americas' },
        { id: 'Europe', title: 'Europe' },
        { id: 'Oceania', title: 'Oceania' }
      ]
    }
  },

  computed: {
    select: {
      get() {
        return this.$route.query.region
      },
      set(val) {
        if (val) {
          this.$router.push({ query: { region: val } })
        }
      }
    }
  },

  methods: {
    search(val) {
      this.select = ''
      this.$router.push({ query: { search: val } })
    }
  }
}
</script>

<style></style>
