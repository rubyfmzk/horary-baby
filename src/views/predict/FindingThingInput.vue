<template>
  <div>
    <h1>なくしものはどこにありますか？<br>（失せ物探し）</h1>

    <h2>1. 占いの確度を上げるため確認をいたします。</h2>
    <ul>
      <li>なくしものがある場所を占います。人やペットを探すわけではありません。</li>
      <li>同じ質問に対する占いは何度もできません。有効な回答が得られなかった場合は、日を改め、頭に浮かんできた時に再度占ってください。</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['input'],
  created() {
    this.horo()
  },
  watch:{
    input: function(){
      this.horo()
    },
  },
  methods:{
    horo(){
      const who = this.input && this.input.who.int() ? this.input.who.int() : 1
      const significator_house = (who) % 12 + 1
console.log(significator_house)
      this.$emit('horo', {
        significator:{
          house: significator_house,
        },
      })
    },
  }
}
</script>