<template>
  <form class="k-search-box" @submit.prevent="search">
    <div class="k-search-box__wrapper">
      <button class="k-search-box__btn" type="submit">
        <i class="icon icon-search" />
      </button>

      <input
        v-model.trim="model"
        class="k-search-box__input"
        :name="safeName"
        :id="safeId"
        v-bind="$attrs"
        v-on="listeners"
        type="text"
        placeholder="Search for countery ..."
      />
    </div>
  </form>
</template>

<script>
import controlMixin from '@mixins/control'

export default {
  name: 'KSearchBox',
  mixins: [controlMixin],
  data() {
    return {
      model: ''
    }
  },

  methods: {
    search() {
      this.$emit('search', this.model)
    }
  }
}
</script>

<style lang="scss" src="./KSearchBox.scss"></style>
