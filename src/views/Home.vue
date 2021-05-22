<template>
  <div>
    <section id="home_background" v-bind:style="{ 'background-image':img }"></section>

    <section id="home_before_top"></section>
    <section id="home_top">
      <div class="text">
        <p>{{ current_sun_position }}</p>
        <p>{{ $t('home.top.current_sabian_symbol') }}</p>
        <p class="sabian">{{ sabian }}</p>
        <p>{{ until_next }}</p>
      </div>
    </section>
    <article id="home_article">
      <section id="home_lang">
        <p>
          <ComponentLang></ComponentLang>
        </p>
      </section>
      <section id="home_about">
        <h2>{{ $t('home.about.title') }}</h2>
        <div v-html="$t('home.about.description')"></div>
      </section>
    </article>
  </div>
</template>

<script>
import Mixin from '@/components/Common'
import ComponentLang from '@/components/ComponentLang'

export default {
  name: 'Home',
  mixins:[Mixin],
  props: {
    current: Object,
  },
  components: {
    ComponentLang
  },
  data () {
    return {
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  mounted(){
    this.show_hide_nav()

  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods:{
    onScroll(){
      this.show_hide_nav()
    },
    show_hide_nav(){
      if(this.$route.name !== 'home') return

      if(window.pageYOffset < 50 && this.$$('#page_nav').classList.contains('show')){
        this.$$('#page_nav').classList.add("hide")
        this.$$('#page_nav').classList.remove("show")
      }
      else if(window.pageYOffset >= 50 && this.$$('#page_nav').classList.contains('hide')){
        this.$$('#page_nav').classList.add("show")
        this.$$('#page_nav').classList.remove("hide")
      }
    },
    getUntilNext(longitude, longitudeSpeed){
      var rest = (1 - longitude % 1) / longitudeSpeed * 24
      var hour = rest.int().zeroPadding(2)
      var minute = (rest % 1 * 60).int().zeroPadding(2)
      return {hour: hour, minute: minute, hour_minute: hour + ':' + minute}
    },
  }
}

</script>

<style>
@import url("../assets/css/home.scss");
</style>