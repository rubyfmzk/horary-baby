<template>
  <div>
    <section class="narrow pure-form">
      <router-view name="input" @input_child="get_input_child" :input="input"></router-view>

      <div>
        <h2>2. 誰のなくしものですか？</h2>
        <select id="who" @change="change_input">
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
          <select id="select_pref">
            <option value="1" data-lat="43.06417" data-lon="141.34694">北海道</option>
            <option value="2" data-lat="40.82444" data-lon="140.74">青森県</option>
            <option value="3" data-lat="39.70361" data-lon="141.1525">岩手県</option>
            <option value="4" data-lat="38.26889" data-lon="140.87194">宮城県</option>
            <option value="5" data-lat="39.71861" data-lon="140.1025">秋田県</option>
            <option value="6" data-lat="38.24056" data-lon="140.36333">山形県</option>
            <option value="7" data-lat="37.75" data-lon="140.46778">福島県</option>
            <option value="8" data-lat="36.34139" data-lon="140.44667">茨城県</option>
            <option value="9" data-lat="36.56583" data-lon="139.88361">栃木県</option>
            <option value="10" data-lat="36.39111" data-lon="139.06083">群馬県</option>
            <option value="11" data-lat="35.85694" data-lon="139.64889">埼玉県</option>
            <option value="12" data-lat="35.60472" data-lon="140.12333">千葉県</option>
            <option value="13" data-lat="35.67698" data-lon="139.75884" selected>東京都</option>
            <option value="14" data-lat="35.44778" data-lon="139.6425">神奈川県</option>
            <option value="15" data-lat="37.90222" data-lon="139.02361">新潟県</option>
            <option value="16" data-lat="36.69528" data-lon="137.21139">富山県</option>
            <option value="17" data-lat="36.59444" data-lon="136.62556">石川県</option>
            <option value="18" data-lat="36.06528" data-lon="136.22194">福井県</option>
            <option value="19" data-lat="35.66389" data-lon="138.56833">山梨県</option>
            <option value="20" data-lat="36.65139" data-lon="138.18111">長野県</option>
            <option value="21" data-lat="35.39111" data-lon="136.72222">岐阜県</option>
            <option value="22" data-lat="34.97694" data-lon="138.38306">静岡県</option>
            <option value="23" data-lat="35.18028" data-lon="136.90667">愛知県</option>
            <option value="24" data-lat="34.73028" data-lon="136.50861">三重県</option>
            <option value="25" data-lat="35.00444" data-lon="135.86833">滋賀県</option>
            <option value="26" data-lat="35.02139" data-lon="135.75556">京都府</option>
            <option value="27" data-lat="34.68639" data-lon="135.52">大阪府</option>
            <option value="28" data-lat="34.69139" data-lon="135.18306">兵庫県</option>
            <option value="29" data-lat="34.68528" data-lon="135.83278">奈良県</option>
            <option value="30" data-lat="34.22611" data-lon="135.1675">和歌山県</option>
            <option value="31" data-lat="35.50361" data-lon="134.23833">鳥取県</option>
            <option value="32" data-lat="35.47222" data-lon="133.05056">島根県</option>
            <option value="33" data-lat="34.66167" data-lon="133.935">岡山県</option>
            <option value="34" data-lat="34.39639" data-lon="132.45944">広島県</option>
            <option value="35" data-lat="34.18583" data-lon="131.47139">山口県</option>
            <option value="36" data-lat="34.06583" data-lon="134.55944">徳島県</option>
            <option value="37" data-lat="34.34028" data-lon="134.04333">香川県</option>
            <option value="38" data-lat="33.84167" data-lon="132.76611">愛媛県</option>
            <option value="39" data-lat="33.55972" data-lon="133.53111">高知県</option>
            <option value="40" data-lat="33.60639" data-lon="130.41806">福岡県</option>
            <option value="41" data-lat="33.24944" data-lon="130.29889">佐賀県</option>
            <option value="42" data-lat="32.74472" data-lon="129.87361">長崎県</option>
            <option value="43" data-lat="32.78972" data-lon="130.74167">熊本県</option>
            <option value="44" data-lat="33.23806" data-lon="131.6125">大分県</option>
            <option value="45" data-lat="31.91111" data-lon="131.42389">宮崎県</option>
            <option value="46" data-lat="31.56028" data-lon="130.55806">鹿児島県</option>
            <option value="47" data-lat="26.2125" data-lon="127.68111">沖縄県</option>
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

          <span id="input_second_row">
            <select id="where_lon_ew">
              <option value="1">東経</option>
              <option value="-1">西経</option>
            </select>
            <select id="where_lon_degree">
              <option v-for="n in 180" :key="n-1">{{n-1}}</option>
            </select>
            <span>度</span>
            <select id="where_lon_minute">
              <option v-for="n in 60" :key="n-1">{{n-1}}</option>
            </select>
            <span>分</span>
          </span>
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
          <input type="date" id="when_date">
          <span id="input_second_row">
            <input type="time" id="when_time">
          </span>
        </label>
      </div>
<!--
      <div>
        <h2>5. 質問内容を記入できます。（書かなくてもOK）</h2>
        <input type="text" class="pure-input-1" placeholder="記入すると、考えをまとめたり、後から振り返る時に便利です。">
      </div>-->

      <div class="center">
        <button class="predict" @click="get_result">教えてください<br>お星さま</button>
      </div>

      <section class="hide_result">
        <div class="center">
          <canvas id="horo" width="500" height="620"></canvas>
        </div>

        <div>
          <h2>鑑定の有効度（ラディカル度）</h2>
          <p>
            <span class="star_radical" v-for="n in radical.score" :key="n">★</span>
            <span class="star_not_radical" v-for="n in 5 - radical.score" :key="n">☆</span>
          </p>
          <p>{{radical.message}}</p>
        </div>
        <router-view name="result" :r="result"></router-view>
      </section>

    </section>
    
  </div>
</template>

<script>
import Mixin from '@/components/Common'
import define from '@/assets/js/define'

export default {
  name: 'Predict',
  mixins:[Mixin],
  props: {
  },
  components: {
  },
  data () {
    return {
      result: this.result,
      horo: this.horo,
      input_child: this.input_child,
      input: this.input,
      radical: this.radical,
    }
  },

  created() {
    this.pl = new window.Pluto()
    this.radical = {
      score: 0,
      message: '',
    }
  },
  mounted(){
    this.set_default_input()


/* 開発用
    this.pl.setDate(2021, 5, 16, 15, 10, 0, 9)
    this.pl.getPlanets()
    this.pl.setGeoPosition(45, 135)
    this.houses = this.pl.getHouses()

    this.result = {
      pl: this.pl,
      planets: this.get_adjusted_planets(),
      c: this.getConditions(),
      opt: this.get_options(),
      input_child: this.input_child,
    }
    this.drawHoroscope(this.result)
    this.show_radical(this.result)*/
  },

  methods:{
    change_input(){
      this.input = {
        who: this.$$('#who').value,
      }
    },

    get_adjusted_planets(){
      const planets = []
      for(var k in this.pl.planets){
        if(['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'TrueNode'].indexOf(k) < 0) continue

        const v = this.pl.planets[k]
        v.key = k
        planets.push(v)
      }

      planets.push({key:'AC', longitude:this.pl.houses[1]})
      planets.push({key:'IC', longitude:this.pl.houses[4]})
      planets.push({key:'DC', longitude:this.pl.houses[7]})
      planets.push({key:'MC', longitude:this.pl.houses[10]})

      const POF_lon = (this.pl.houses[1] + this.pl.planets.Moon.longitude - this.pl.planets.Sun.longitude) % 360
      planets.push({key:'POF', longitude:POF_lon})

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

      while(count<30){
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

          //N度以内だとぶつかるので離す
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

    get_input_child(v){
      this.input_child = v
    },

    get_options(){
      let where = '', when = ''

      if(this.$$('#where_pref').checked){
        this.$$('#select_pref').options.forEach(v=>{
          if(v.selected){
            where = v.text
            return
          }
        })
      }
      else{
        where += this.$$('#where_lat_ns').value.int() === 1 ? '北緯' : '南緯'
        where += this.$$('#where_lat_degree').value + '°'
        where += this.$$('#where_lat_minute').value + '\''
        where += this.$$('#where_lon_ew').value.int() === 1 ? '東経' : '西経'
        where += this.$$('#where_lon_degree').value + '°'
        where += this.$$('#where_lon_minute').value + '\''
      }

      if(this.$$('#when_now').checked){
        const now = new Date()
        when += now.toStr('yyyy-MM-dd') + ' ' + now.toStr('HH:mm')
      }
      else{
        when += this.$$('#when_date').value + ' ' + this.$$('#when_time').value
      }
      when += ' (UTC+0900)'

      return {
        when: when,
        where: where,
      }
    },

    get_result(){
      let year, month, day, hour, minute, lat, lon, date, time
      const timezone = 9

      this.$cookies.config(60 * 60 * 24 * 365, '')
      //this.$cookies.set('lat', 0)

      if(this.$$('#when_now').checked){
        this.pl.setCurrentDate()
      }
      else{
        date = this.$$('#when_date').value
        time = this.$$('#when_time').value
        year = date.slice(0,4).int()
        month = date.slice(5,7).int()
        day = date.slice(8,10).int()
        hour = time.slice(0,2).int()
        minute = time.slice(3,5).int()

        this.pl.setDate(year, month, day, hour, minute, 0, timezone)
      }

      if(this.$$('#where_pref').checked){
        this.$$('#select_pref').options.forEach(v=>{
          if(v.selected){
            lat = v.dataset.lat.float()
            lon = v.dataset.lon.float()
            return
          }
        })
      }
      else{
        lat = this.$$('#where_lat_ns').value.int() * (this.$$('#where_lat_degree').value.int() + this.$$('#where_lat_minute').value.int() / 60)
        lon = this.$$('#where_lon_ew').value.int() * (this.$$('#where_lon_degree').value.int() + this.$$('#where_lon_minute').value.int() / 60)
      }

      
      this.pl.getPlanets()
      this.pl.setGeoPosition(lat, lon)
      this.houses = this.pl.getHouses()

      this.result = {
        pl: this.pl,
        planets: this.get_adjusted_planets(),
        c: this.getConditions(),
        opt: this.get_options(),
        input_child: this.input_child,
      }
      this.drawHoroscope(this.result)
      this.show_radical(this.result)
    },

    show_radical(r){
      const not_so_void_signs = ['Taurus', 'Cancer', 'Sagittarius', 'Pisces']
      const hour_ruler = r.c.hour_ruler
      const moon_is_void = r.c.Moon.void
      const moon_sign = r.c.Moon.sign_info.key
      const ASC_degree = r.pl.houses[1] % 30
      const ASC_element = r.c.house[1].sign.element
      const hour_ruler_element = define.PLANET_LIST[hour_ruler].element
      const ASC_ruler = r.c.house[1].sign.ruler
      const ASC_triplicity = r.c.is_night ? r.c.house[1].sign['night_triplicity'] : r.c.house[1].sign['day_triplicity']
      let score = 0
      let m

      let is_radical_hour_ruler = false
      if(ASC_ruler === hour_ruler ||
         ASC_triplicity == hour_ruler ||
         ASC_element === hour_ruler_element){
        is_radical_hour_ruler = true
        score++
      }
      if(ASC_degree >= 3 && ASC_degree < 27){
        score += 2
      }
      else if(ASC_degree >= 1 && ASC_degree < 3 || ASC_degree >= 27 && ASC_degree < 29){
        score++
      }
      if(!moon_is_void){
        score += 2
      }
      else if(moon_is_void && not_so_void_signs.indexOf(moon_sign) >= 0){
        score++
      }

//console.log(hour_ruler , moon_is_void, moon_sign, ASC_degree, ASC_element, hour_ruler_element , ASC_ruler , ASC_triplicity)

      
      if(score === 5){
        m = 'とても真剣に鑑定に取り組んでいることがチャートに表れています。鑑定結果を読み進めてください。'
      }
      else if(score === 4 && (
        !is_radical_hour_ruler ||
        moon_is_void
        )){
        m = '有効なチャートです。鑑定結果を読み進めてください。'
      }
      else if(!moon_is_void){
        if(is_radical_hour_ruler && ASC_degree > 1 && ASC_degree < 3){
          m = 'まだ質問を熟考していないと暗示されていますが、状況がチャートに反映されているので鑑定結果を読み進めてください。結果を参考にして質問についてよく考えると良いでしょう。'
        }
        else if(ASC_degree < 3){
          m = 'まだ質問を熟考していないことが暗示されています。占いの前に行動したり考えたりなどできることがあったかもしれません。明日以降にもう一度占うのが良いでしょう。'
        }
        else if(is_radical_hour_ruler && ASC_degree >= 27 && ASC_degree < 29){
          m = '手遅れになりつつあると暗示されています。まだ間に合うかもしれないので鑑定結果を読み進めて参考にしてください。'
        }
        else if(ASC_degree >= 27){
          m = '既に結果が判明しているか、手遅れになりつつあるとチャートに示されています。鑑定結果を読み進めても役に立たないかもしれません。状況に変化が訪れた後にもう一度占うのが良いでしょう。'
        }
      }
      else{
        m = '状況が変わらないことが暗示されています。もしくは心が凝り固まった考えにとらわれて視野が狭くなっている状態でしょう。明日以降に再度占い直すことをオススメします。'
      }
        
      this.radical.message = m
      this.radical.score = score
    },

    set_default_input(){
      const now = new Date()
      this.$$('#when_date').value = now.getFullYear() + '-' + (now.getMonth() + 1).zeroPadding(2) + '-' + now.getDate().zeroPadding(2)
      this.$$('#when_time').value = now.getHours().zeroPadding(2) + ':' + now.getMinutes().zeroPadding(2)

      this.$$('#select_pref').options.forEach(v=>{
        if(v.selected){
          this.$$('#where_lat_ns').value = v.dataset.lat > 0 ? 1 : -1
          this.$$('#where_lat_degree').value = v.dataset.lat.abs().int()
          this.$$('#where_lat_minute').value = (v.dataset.lat.abs()%1*60).int()
          this.$$('#where_lon_ew').value = v.dataset.lon > 0 ? 1 : -1
          this.$$('#where_lon_degree').value = v.dataset.lon.abs().int()
          this.$$('#where_lon_minute').value = (v.dataset.lon.abs()%1*60).int()
          return
        }
      })
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
    width: 500px;
    max-width: 100%;
    height: auto;
    /*border: solid 1px #0f0;*/
    margin: 50px 0;
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
    background: #f4dd66;
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
  100%{
    background: #f4dd66
  }
}
@-webkit-keyframes shine{
  0% {
    background: #574ccf;
  }
  40% {
    background: #b9c157;
  }
  100%{
    background: #f4dd66;
  }
}
.star_radical{
    color: #e18e15;
}
#when_date{
    display: inline-block;
}
#when_time{
    display: inline-block;
}
#input_second_row{
    display: inline;
}
@media (max-width: 767px){
  #input_second_row{
    display: block;
    margin: 5px 0 0 22px;
    padding: 0;
  }
}
</style>