<template>
    <div>
        <comp-wrapper />
        <router-view/>
    </div>
</template>

<script>

import CompWrapper from './components/layout/CompWrapper.vue'
export default {
  name: 'App',
  components: {
      CompWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
