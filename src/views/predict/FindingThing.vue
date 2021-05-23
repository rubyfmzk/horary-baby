<template>
  <div>
    <section class="narrow">
      <div>
        <h1>なくしものはどこにありますか？<br>（失せ物探し）</h1>

        <h3>占いの確度を上げるため確認をいたします。</h3>
        <ul>
          <li>なくしものがある場所を占います。人やペットを探すわけではありません。</li>
          <li>同じ質問に対する占いは何度もできません。有効な回答が得られなかった場合は、日を改め、頭に浮かんできた時に再度占ってください。</li>
        </ul>

        <h3>誰のなくしものですか？</h3>
        <select>
          <option value="1" selected>自分</option>
          <option value="7">配偶者・恋人</option>
          <option value="4">父</option>
          <option value="10">母</option>
          <option value="5">息子・娘</option>
          <option value="3">兄弟姉妹・いとこ</option>
          <option value="4">家族全体・祖父母・先祖</option>
          <option value="9">孫</option>
          <option value="6">父方のおじ・おば・親戚</option>
          <option value="12">母方のおじ・おば・親戚</option>
          <option value="7">おい・めい</option>
          <option value="10">義父・配偶者の先祖</option>
          <option value="4">義母</option>
          <option value="9">配偶者の親戚</option>
          <option value="11">友人</option>
          <option value="10">上司・雇い主・社長</option>
          <option value="6">部下・従業員</option>
          <option value="7">同僚・相棒・取引先・お客さま・ライバル</option>
          <option value="3">近所の人</option>
          <option value="9">専門分野の先生・聖職者</option>
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


      </div>
    </section>
  </div>
</template>

<script>
import Mixin from '@/components/Common'

export default {
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