<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Mixin from '@/components/Common'

export default {
  name: 'Predict',
  mixins:[Mixin],
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },

  created() {
  },
  mounted(){
  },

  methods:{

  }
}
</script>

<style>
h1{
    text-align: center;
}
</style>