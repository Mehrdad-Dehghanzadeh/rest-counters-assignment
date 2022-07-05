<template>
  <header class="default-layout-header">
    <div class="container">
      <div class="display-flex justify-content-between align-items-center">
        <strong class="default-layout-header__title">
          Where in the world ?
        </strong>

        <span class="dark-mode-toggle" @click="changeMode">
          <i
            :class="[
              'icon',
              { 'icon-moon': theme === 'light', 'icon-sun': theme === 'dark' }
            ]"
          />
          <span>{{ theme === 'light' ? `Dark Mode` : 'Light Mode' }}</span>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',

  data() {
    return {
      theme: 'light'
    }
  },

  methods: {
    changeMode() {
      const body = document.body
      if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme')
        this.theme = 'light'
      } else {
        body.setAttribute('data-theme', 'dark')
        this.theme = 'dark'
      }
    }
  }
}
</script>

<style lang="scss" src="./DefaultHeader.scss" />
