<template>
  <header id="header">
    <h1>
      <router-link :to="{name:'home', query: $route.query}">
        <span>Horary</span>
        <img class="logo" src="/img/common/horary_rain.svg">
        <span>Rain</span>
      </router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'ComponentFooter',
  components: {
  },
  data(){
    return {
    }
  }
}
</script>

