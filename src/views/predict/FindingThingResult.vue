<template>
  <section>
    <div>
      <h2>なくしものがありそうな場所</h2>
      <p>ありそうな方角は、<b>{{message.direction}}</b>です。</p>
      <p>もしくは、<b>{{message.house}}</b>も探してみてください。</p>
    </div>
<!--    <div>
      <h2>なくしものの見つかりやすさ</h2>
    </div>-->
  </section>
</template>

<script>
import Mixin from '@/components/Common'

export default {
  mixins:[Mixin],
  props: ['r'],
  components: {
  },
  data () {
    return {
      message: this.message,
    }
  },
  watch:{
    r: function(){
console.log(this.r)
      this.set_result()
    }
  },
  created(){
    this.message = {
      direction: '',
      house: '',
    }
  },
  methods:{
    set_result(){
      if(!this.r.c) return

      const ASC = this.r.pl.houses[1]
      const IC = this.r.pl.houses[4]
      const DC = this.r.pl.houses[7]
      const MC = this.r.pl.houses[10]
      const direction_list = {
        E: '東',
        S: '南',
        W: '西',
        N: '北',
        SE: '南東',
        SW: '南西',
        NW: '北西',
        NE: '北東',
      }
      const house_direction_messages = [
        null,['E'],['E','NE'],['N','NE'],['N'],['N','NW'],['W','NW'],['W'],['W','SW'],['S','SW'],['S'],['S','SE'],['E','SE']
      ]
      const house_messages = [
        null,
        '持ち主のよくいる場所、ポケット',
        '所持品を保管する場所、貴重品置き場、バッグの中',
        '本・携帯電話・PC・テレビのそば、車の中、近所、道路、通勤経路',
        '自宅、地下、仏壇、家長の部屋',
        '遊び場、楽しい場所、くつろぐ場所、子供部屋',
        '家事や雑務をする場所、ペットの場所',
        'パートナーのよくいる場所、取引先、他人の場所',
        'ごみの中、パートナーや他人の所持品の中',
        '書斎、神聖な場所、遠いところ',
        '職場、仕事をする場所、公共の場',
        '友人の場所、友人との共有スペース',
        '寝室、静かな場所、誰かが隠している、病院',
      ]

      const sig_house = this.r.input_child.horo.significator.house
      const sig_planet = this.r.c.house[sig_house].ruler
      const sig_planet_house  = this.r.c[sig_planet].house
      const sig_planet_lon = this.r.c[sig_planet].sign.longitude
      const direction = {}

      if((sig_planet_lon - ASC).abs() < 5 ||
         (sig_planet_lon - ASC).abs() > 355){
        direction.E = direction_list.E
      }
      else if((sig_planet_lon - DC).abs() < 5 ||
         (sig_planet_lon - DC).abs() > 355){
        direction.W = direction_list.W
      }
      if((sig_planet_lon - MC).abs() < 5 ||
         (sig_planet_lon - MC).abs() > 355){
        direction.S = direction_list.S
      }
      else if((sig_planet_lon - IC).abs() < 5 ||
         (sig_planet_lon - IC).abs() > 355){
        direction.N = direction_list.N
      }
      house_direction_messages[sig_planet_house].forEach(v=>{
        direction[v] = direction_list[v]
      })


      this.message.direction = Object.keys(direction).map(k=>{return direction[k]}).join('・')
      this.message.house = house_messages[sig_planet_house]

    },
  }
}
</script>

<style>

</style>