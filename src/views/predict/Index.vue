<template>
  <div>
    <section class="narrow pure-form">
      <router-view name="title"></router-view>

      <div>
        <h2>2. 誰のなくしものですか？</h2>
        <select>
          <option value="1" selected>自分</option>
          <option value="7">配偶者・恋人</option>
          <option value="4">父</option>
          <option value="10">母</option>
          <option value="5">息子・娘</option>
          <option value="4">家族全体・祖父母・先祖</option>
          <option value="9">孫</option>
          <option value="3">兄弟姉妹・いとこ・親戚</option>
          <option value="10">義父・配偶者の先祖</option>
          <option value="4">義母</option>
          <option value="9">配偶者の親戚</option>
          <option value="10">上司・雇い主・社長</option>
          <option value="6">部下・従業員</option>
          <option value="7">相棒・取引先・ライバル</option>
          <option value="11">お客さま・クライアント</option>
          <option value="11">友人（仕事以外で会う仲）</option>
          <option value="3">近所の人</option>
          <option value="9">専門分野の先生・聖職者</option>
          <option value="7">上記のどれにも属さない人、知り合い</option>
          <option value="6">ペット</option>
          <option value="12">大きな家畜</option>
          <option value="1">1ハウスの人（先生の子供など）</option>
          <option value="2">2ハウスの人（友達の父など）</option>
          <option value="3">3ハウスの人（母のペットなど）</option>
          <option value="4">4ハウスの人（恋人の上司など）</option>
          <option value="5">5ハウスの人（友達の恋人など）</option>
          <option value="6">6ハウスの人（両親の近所の人など）</option>
          <option value="7">7ハウスの人（孫の友人など）</option>
          <option value="8">8ハウスの人（兄弟のペットなど）</option>
          <option value="9">9ハウスの人（友達の友達など）</option>
          <option value="10">10ハウスの人（部下の子供など）</option>
          <option value="11">11ハウスの人（子供の恋人など）</option>
          <option value="12">12ハウスの人（社長の兄弟など）</option>
        </select>

        <p>
          選択時のアドバイス
          <ul>
            <li>自分以外の質問が自分の悩みになっていない場合は、「自分」を選択すると良いでしょう。当事者の代わりに占うということです。</li>
            <li>2つの役割を兼ねている場合は質問にふさわしい方を選んでください。例えば友達であり上司である場合、質問が仕事に関係していれば上司を選んでください。占術の研究者は両方試すことをおススメします。</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>3. 今いる場所はどこですか？</h2>

        <label class="pure-checkbox">
          <input type="radio" name="where_type" id="where_pref" checked> 
          <select>
            <option value="1" data-lat="43.06417" data-lon="141.34694">北海道 札幌市</option>
            <option value="2" data-lat="40.82444" data-lon="140.74">青森県 青森市</option>
            <option value="3" data-lat="39.70361" data-lon="141.1525">岩手県 盛岡市</option>
            <option value="4" data-lat="38.26889" data-lon="140.87194">宮城県 仙台市</option>
            <option value="5" data-lat="39.71861" data-lon="140.1025">秋田県 秋田市</option>
            <option value="6" data-lat="38.24056" data-lon="140.36333">山形県 山形市</option>
            <option value="7" data-lat="37.75" data-lon="140.46778">福島県 福島市</option>
            <option value="8" data-lat="36.34139" data-lon="140.44667">茨城県 水戸市</option>
            <option value="9" data-lat="36.56583" data-lon="139.88361">栃木県 宇都宮市</option>
            <option value="10" data-lat="36.39111" data-lon="139.06083">群馬県 前橋市</option>
            <option value="11" data-lat="35.85694" data-lon="139.64889">埼玉県 さいたま市</option>
            <option value="12" data-lat="35.60472" data-lon="140.12333">千葉県 千葉市</option>
            <option value="13" data-lat="35.67698" data-lon="139.75884" selected>東京都 23区</option>
            <option value="14" data-lat="35.44778" data-lon="139.6425">神奈川県 横浜市</option>
            <option value="15" data-lat="37.90222" data-lon="139.02361">新潟県 新潟市</option>
            <option value="16" data-lat="36.69528" data-lon="137.21139">富山県 富山市</option>
            <option value="17" data-lat="36.59444" data-lon="136.62556">石川県 金沢市</option>
            <option value="18" data-lat="36.06528" data-lon="136.22194">福井県 福井市</option>
            <option value="19" data-lat="35.66389" data-lon="138.56833">山梨県 甲府市</option>
            <option value="20" data-lat="36.65139" data-lon="138.18111">長野県 長野市</option>
            <option value="21" data-lat="35.39111" data-lon="136.72222">岐阜県 岐阜市</option>
            <option value="22" data-lat="34.97694" data-lon="138.38306">静岡県 静岡市</option>
            <option value="23" data-lat="35.18028" data-lon="136.90667">愛知県 名古屋市</option>
            <option value="24" data-lat="34.73028" data-lon="136.50861">三重県 津市</option>
            <option value="25" data-lat="35.00444" data-lon="135.86833">滋賀県 大津市</option>
            <option value="26" data-lat="35.02139" data-lon="135.75556">京都府 京都市</option>
            <option value="27" data-lat="34.68639" data-lon="135.52">大阪府 大阪市</option>
            <option value="28" data-lat="34.69139" data-lon="135.18306">兵庫県 神戸市</option>
            <option value="29" data-lat="34.68528" data-lon="135.83278">奈良県 奈良市</option>
            <option value="30" data-lat="34.22611" data-lon="135.1675">和歌山県 和歌山市</option>
            <option value="31" data-lat="35.50361" data-lon="134.23833">鳥取県 鳥取市</option>
            <option value="32" data-lat="35.47222" data-lon="133.05056">島根県 松江市</option>
            <option value="33" data-lat="34.66167" data-lon="133.935">岡山県 岡山市</option>
            <option value="34" data-lat="34.39639" data-lon="132.45944">広島県 広島市</option>
            <option value="35" data-lat="34.18583" data-lon="131.47139">山口県 山口市</option>
            <option value="36" data-lat="34.06583" data-lon="134.55944">徳島県 徳島市</option>
            <option value="37" data-lat="34.34028" data-lon="134.04333">香川県 高松市</option>
            <option value="38" data-lat="33.84167" data-lon="132.76611">愛媛県 松山市</option>
            <option value="39" data-lat="33.55972" data-lon="133.53111">高知県 高知市</option>
            <option value="40" data-lat="33.60639" data-lon="130.41806">福岡県 福岡市</option>
            <option value="41" data-lat="33.24944" data-lon="130.29889">佐賀県 佐賀市</option>
            <option value="42" data-lat="32.74472" data-lon="129.87361">長崎県 長崎市</option>
            <option value="43" data-lat="32.78972" data-lon="130.74167">熊本県 熊本市</option>
            <option value="44" data-lat="33.23806" data-lon="131.6125">大分県 大分市</option>
            <option value="45" data-lat="31.91111" data-lon="131.42389">宮崎県 宮崎市</option>
            <option value="46" data-lat="31.56028" data-lon="130.55806">鹿児島県 鹿児島市</option>
            <option value="47" data-lat="26.2125" data-lon="127.68111">沖縄県 那覇市</option>
          </select>
        </label>

        <label class="pure-checkbox">
          <input type="radio" name="where_type" id="where_latlon">
          <select id="where_lat_ns">
            <option value="1">北緯</option>
            <option value="-1">南緯</option>
          </select>
          <select id="where_lat_degree">
            <option v-for="n in 90" :key="n-1">{{n-1}}</option>
          </select>
          <span>度</span>
          <select id="where_lat_minute">
            <option v-for="n in 60" :key="n-1">{{n-1}}</option>
          </select>
          <span>分</span>
        </label>

        <p>
          ホラリー占星術はチャートを作る人がいる場所で占います。チャートを作る人は質問者自身なので、質問者自身の今いる場所を入力してください。
        </p>
      </div>

      <div>
        <h2>4. 任意の日時を使う場合は入力してください。</h2>
        <label class="pure-checkbox">
          <input type="radio" name="when_type" id="when_now" checked>
          現在
        </label>

        <label class="pure-checkbox">
          <input type="radio" name="when_type" id="when_input">
        </label>
      </div>

      <div>
        <h2>5. 質問内容を記入できます。（書かなくてもOK）</h2>
        <input type="text" class="pure-input-1" placeholder="後から振り返る時に便利です">
      </div>

      <div class="center">
        <button class="predict" @click="get_result">教えてください<br>お星さま</button>
        <br>
        <canvas id="horo" width="600" height="600"></canvas>
      </div>
    </section>

    <router-view name="result"></router-view>
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
    this.pl = new window.Pluto()


  },
  mounted(){
    this.pl.setCurrentDate()
    this.pl.getPlanets()
    this.pl.setGeoPosition(45, 135)
    this.houses = this.pl.getHouses('K')

    const v={
      pl: this.pl,
      planets: this.get_adjusted_planets(),
    }
    this.draw_horoscope(v)
  },

  methods:{
    get_adjusted_planets(){
      const planets = []
      for(var k in this.pl.planets){
        if(['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'].indexOf(k) < 0) continue

        const v = this.pl.planets[k]
        v.key = k
        planets.push(v)
      }

      planets.push({key:'Ac', longitude:this.pl.houses[1]})
      planets.push({key:'Ic', longitude:this.pl.houses[4]})
      planets.push({key:'Dc', longitude:this.pl.houses[7]})
      planets.push({key:'Mc', longitude:this.pl.houses[10]})

      const fortune_lon = (this.pl.houses[1] + this.pl.planets.Moon.longitude - this.pl.planets.Sun.longitude) % 360
      planets.push({key:'Fortune', longitude:fortune_lon})

      planets.sort(function(a,b){
          if(a.longitude < b.longitude) return -1
          if(a.longitude > b.longitude) return 1
          return 0
      })

      let count = 0
      const icon_degrees = []
      planets.forEach((v)=>{
        icon_degrees.push(v.longitude)
      })

      while(count<5){
        planets.forEach((v,i)=>{
          let p_key1 = i
          let p_key2 = i+1 
          let p_key3 = i+2
          let p_key4 = i+3
          if(p_key2 >= planets.length) p_key2 -= planets.length
          if(p_key3 >= planets.length) p_key3 -= planets.length
          if(p_key4 >= planets.length) p_key4 -= planets.length
          let p1 = icon_degrees[p_key1]
          let p2 = icon_degrees[p_key2]
          let p3 = icon_degrees[p_key3]
          let p4 = icon_degrees[p_key4]
          if(p2 < p1) p2 += 360
          if(p3 < p2) p3 += 360
          if(p4 < p3) p4 += 360

          const diff = 9
          if(p3 - p2 < diff){
            p2 = (p3 + p2 - diff) / 2
            p3 = (p3 + p2 + diff) / 2
            if(p2 < p1) p2 = p1 + 0.01
            if(p3 > p4) p3 = p4 - 0.01
          }

          icon_degrees[p_key2] = p2 % 360
          icon_degrees[p_key3] = p3 % 360
        })

        count++
      }

      planets.forEach((v,i)=>{
        planets[i].icon_degree = icon_degrees[i]
      })

      return planets
    },


    draw_horoscope(v){
      const canvas = this.$$('#horo')
      const ctx = canvas.getContext('2d')
      const circle_radius = 230
      const outer_circle_radius = 250
      const planet_radius = 205
      const house_radius = 30
      const planets = {
        Sun:{
          text: '☉',
          ratio: 1.4,
        },
        Moon:{
          text: '☽',
          ratio: 1,
        },
        Mercury:{
          text: '☿',
          ratio: 0.7,
          speed: 0.985555,
        },
        Venus:{
          text: '♀',
          ratio: 0.6,
          bold: true,
          speed: 0.985555,
        },
        Mars:{
          text: '♂',
          ratio: 0.6,
          bold: true,
          speed: 0.524166,
        },
        Jupiter:{
          text: '♃',
          ratio: 0.7,
          speed: 0.083055,
        },
        Saturn:{
          text: '♄',
          ratio: 0.7,
          speed: 0.033611,
        },
        Uranus:{
          text: '♅',
          ratio: 0.7,
          speed: 0.011733,
        },
        Neptune:{
          text: '♆',
          ratio: 0.7,
          speed: 0.005973,
        },
        Pluto:{
          text: '♇',
          ratio: 0.6,
          speed: 0.003974,
        },
        Ac:{
          text: 'AC',
          ratio: 0.3,
        },
        Mc:{
          text: 'MC',
          ratio: 0.3,
        },
        Dc:{
          text: 'DC',
          ratio: 0.3,
        },
        Ic:{
          text: 'IC',
          ratio: 0.3,
        },
        Fortune:{
          text: '⊗',
          ratio: 0.5,
          bold: true,
        },
      }

      console.log(v)

      const ASC = v.pl.houses[1]
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      //原点調整
      ctx.translate(300, 300)

      ctx.strokeStyle = '#bbb'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(0, 0, outer_circle_radius, 0, Math.PI * 2, true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, circle_radius, 0, Math.PI * 2, true)
      ctx.stroke()

      //目盛
console.log(ASC)
      for(let i=0; i<360; i++){
        const x = Math.cos(Math.PI * (ASC + i) / 180)
        const y = Math.sin(Math.PI * (ASC + i) / 180)
        const ratio = i % 30 ? (i % 5 ? 0.98 : 0.95) : 0
        ctx.beginPath()
        ctx.moveTo(x*circle_radius, y*circle_radius)
        ctx.lineTo(x*circle_radius*ratio, y*circle_radius*ratio)
        ctx.stroke()
      }

      //ハウスとサイン
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 20
      for(let i=0; i<12; i++){
        const start = Math.PI * (180 + (ASC%30) - i*30) / 180
        const end = Math.PI * (180 + (ASC%30) - (i+1)*30) / 180
        //const color_num = 

        ctx.beginPath()
        ctx.arc(0, 0, 240, start, end, true)
        ctx.stroke()

        const rad = Math.PI * (180 + (ASC%30) - (i+0.5)*30) / 180
        const x = Math.cos(rad) * house_radius
        const y = Math.sin(rad) * house_radius
        ctx.fillText((i+1), x, y)
      }
      
      ctx.strokeStyle = '#bbb'
      ctx.lineWidth = 1
      v.planets.forEach((planet)=>{
        const p = planets[planet.key]
        const text = p.text
        const r = p.ratio ? p.ratio : 1
        const bold = p.bold ? 'bold' : ''
        const rad = Math.PI * (180 - planet.longitude + ASC) / 180
        const x = Math.cos(rad) * planet_radius
        const y = Math.sin(rad) * planet_radius
        const p_rad = Math.PI * (180 - planet.icon_degree + ASC) / 180
        const p_x = Math.cos(p_rad) * planet_radius
        const p_y = Math.sin(p_rad) * planet_radius
        
        ctx.font = parseInt(40 * r) + 'px ' + bold + ' sans-serif'
        ctx.fillText(text, p_x*0.9, p_y*0.9)
        ctx.font = '10px  sans-serif'
        ctx.fillText((planet.longitude%30).int().zeroPadding(2), p_x, p_y)

        ctx.beginPath()
        ctx.strokeStyle = '#666'
        ctx.moveTo(p_x*1.05, p_y*1.05)
        ctx.lineTo(x*circle_radius/planet_radius, y*circle_radius/planet_radius)
        ctx.stroke()

        //スピード
        if(p.speed){
          let speed_flg = 1
          if(planet.longitudeSpeed < 0) speed_flg = -1
          else if(planet.longitudeSpeed > p.speed) speed_flg = 2

          draw_triangle(speed_flg, p_rad)
        }
      })

      
      




      //スピードの矢印
      function draw_triangle(speed_flg, p_rad){
        let arrow_start, arrow_end
        switch(speed_flg){
          case 1:
            arrow_start = -0.045
            arrow_end = -0.03
            break
          case -1:
            arrow_start = 0.045
            arrow_end = 0.03
            break
          case 2:
            arrow_start = -0.045
            arrow_end = -0.025
            break
        }

        for(let i=0; i<Math.abs(speed_flg); i++){
          const speed_rad = p_rad + arrow_start
          const speed_x1 = Math.cos(speed_rad+arrow_end) * planet_radius * 1.0
          const speed_x2 = Math.cos(speed_rad) * planet_radius * 1.02
          const speed_x3 = Math.cos(speed_rad) * planet_radius * 0.98
          const speed_y1 = Math.sin(speed_rad+arrow_end) * planet_radius * 1.0
          const speed_y2 = Math.sin(speed_rad) * planet_radius * 1.02
          const speed_y3 = Math.sin(speed_rad) * planet_radius * 0.98
          ctx.beginPath()
          ctx.moveTo(speed_x1, speed_y1)
          ctx.lineTo(speed_x2, speed_y2)
          ctx.lineTo(speed_x3, speed_y3)
          ctx.fill()

          arrow_start += arrow_end
        }
      }
  },

    get_result(){
      let year, month, day, hour, minute, second, lat, lon
      const timezone = 9

      this.$cookies.config(60 * 60 * 24 * 365, '')
      this.$cookies.set('lat', 0)

console.log(this.$$('#when_now'))
      if(this.$$('#when_now')){
        this.pl.setCurrentDate()
      }
      else{

        this.pl.setDate(year, month, day, hour, minute, second, timezone)
      }
      
      this.pl.getPlanets()
      this.pl.setGeoPosition(lat, lon)
      this.houses = this.pl.getHouses('K')

      console.log(this.pl)

      this.draw_horoscope()
    },


  }
}
</script>

<style>
h1{
    text-align: center;
}
[type=radio]{
    margin-right: 10px;
}
#horo{
    width: 600px;
    height: 600px;
    border: solid 1px #0f0;
}
button.predict{
    font-family: 'Noto Serif JP';
    font-weight: bold;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    color: #cadbe2;
    background: #1F1962;
    border: solid 5px #d4eaec;
    animation: rainbow 10s linear infinite;
    -webkit-animation: rainbow 10s linear infinite;
    line-height: 1.5;
}
@keyframes rainbow{
  0% {
    background: #2316b4;
  }
  20% {
    background: #2b7698;
  }
  40% {
    background: #054b83;
    border: solid 5px #d4eaec;
  }
  60% {
    background: #871039;
    border: solid 5px #f4d8ee;
  }
  80% {
    background: #52147f;
    border: solid 5px #d4eaec;
  }
}
@-webkit-keyframes rainbow{
  0% {
    background: #2316b4;
  }
  20% {
    background: #2b7698;
  }
  40% {
    background: #054b83;
    border: solid 5px #d4eaec;
  }
  60% {
    background: #871039;
    border: solid 5px #f4d8ee;
  }
  80% {
    background: #52147f;
    border: solid 5px #d4eaec;
  }
}

button.predict:hover{
    color: #fff;
    background: #fdffe2;
    border: solid 5px #fff;
    animation: shine 3s linear;
    -webkit-animation: shine 3s linear;
}
@keyframes shine{
  0% {
    background: #574ccf;
  }
  40% {
    background: #b9c157;
  }
  80%{
    background: #dfe4a8;
  }
  100%{
    background: #fdffe2;
  }
}
@-webkit-keyframes shine{
  0% {
    background: #574ccf;
  }
  40% {
    background: #b9c157;
  }
  80%{
    background: #dfe4a8;
  }
  100%{
    background: #fdffe2;
  }
}

</style>