<template>
  <div class="default-layout">
    <default-header />

    <main class="default-layout__main" id="default-layout-main">
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import DefaultHeader from '@includes/DefaultHeader/DefaultHeader'

export default {
  name: 'DefaultLayout',
  components: { DefaultHeader }
}
</script>

<style lang="scss" src="./default.scss" />
