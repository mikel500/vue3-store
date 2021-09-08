<template>
  <div class="app">
    <header-store />
    <router-view />
    <footer-store />
  </div>
</template>

<script>
import HeaderStore from '@/components/layout/HeaderStore.vue'
import FooterStore from '@/components/layout/FooterStore.vue'

export default {
  name: 'App',
  components: {
    HeaderStore,
    FooterStore
  }
}
</script>

<style>
</style>
