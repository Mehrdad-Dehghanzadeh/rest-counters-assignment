<template>
  <form class="k-search-box" @submit.prevent="search">
    <div class="k-search-box__wrapper">
      <button class="k-search-box__btn" type="submit">
        <i class="icon icon-search" />
      </button>

      <input
        v-model.trim="localValue"
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

  props: {
    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    localValue: {
      get() {
        return this.value
      },

      set(val) {
        this.updateValue(val)
      }
    }
  },

  methods: {
    updateValue(val) {
      this.$nextTick(() => {
        this.$emit('input', val)
      })
    },

    search() {
      this.$emit('search', localValue)
    }
  }
}
</script>

<style lang="scss" src="./KSearchBox.scss"></style>
