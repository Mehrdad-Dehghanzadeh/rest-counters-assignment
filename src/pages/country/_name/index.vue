<template>
  <article>
    <v-btn @click="$router.back()" icon="arrow-left">back</v-btn>

    <div class="row">
      <div class="col-5"></div>

      <section class="col-7">
        <h1>{{ title }}</h1>

        <div class="row">
          <div class="col-6">
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="col-6"></div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.title
    }
  },

  async asyncData({ $api, params }) {
    const { name } = params
    console.log(name)
  },

  computed: {
    title() {
      return this.$route.params.name
    }
  }
}
</script>

<style></style>
