<template>
  <footer>
    <p>
      <router-link :to="{name:'home'}">HOME</router-link> | <router-link :to="{name:'terms'}">利用規約</router-link>
    </p>
    <p class="sns">
      <a href="https://www.instagram.com/rubyfmzk/" target="_blank">
        <img src="/img/common/instagram.svg">
      </a>
      <a :href="'https://twitter.com/rubyfmzk'" target="_blank">
        <img src="/img/common/twitter.svg">
      </a>
    </p>
    <p class="copyright">©2021 Horary Rain All rights reserved.</p>
  </footer>
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

