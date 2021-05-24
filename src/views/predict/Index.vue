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

        <div class="center">
          <button class="predict" @click="get_result">教えてください<br>お星さま</button>
        </div>
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
  },

  methods:{
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