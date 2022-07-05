<template>
  <component v-bind="$attrs" v-on="$listeners" :is="tag" class="k-btn">
    <i v-if="icon" :class="`icon k-btn__icon icon-${icon} `" />
    <span class="k-btn__text">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  name: 'KBtn',
  props: {
    tag: {
      type: String,
      validate: (val) => ['button', 'nuxt-link'].includes(val),
      default: 'button'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./KBtn.scss" />
