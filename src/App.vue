<template>
  <div id="app">
    <div id="bg"></div>
    <ComponentHeader></ComponentHeader>
    <router-view></router-view>
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader.vue'
import ComponentFooter from '@/components/ComponentFooter.vue'
import Mixin from '@/components/Common'

export default {
  mixins:[Mixin],
  components: {
    ComponentHeader,
    ComponentFooter,
  },
  watch: {
    '$route': function(to){
      //スクロール位置
      if(!to.hash){
        window.scrollTo(0, 0)//トップへ
      }
      else{
        this.toAnchor(to.hash)
      }
    },
  },
  methods:{
    toAnchor: function(hash){
      this.$scrollTo(hash)
    },
  }
}
</script>

<style scoped lang="scss">
@import url("assets/css/pure.css");
@import url("assets/css/common.scss");
</style>