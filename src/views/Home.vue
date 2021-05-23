<template>
  <div>
    <section class="narrow">
      <div>
        <p>ホラリーレインへのご訪問ありがとうございます。ホラリーレインは、具体的な質問に星たちが答えてくれる、ホラリー占星術による無料の占いサイトです。</p>
      </div>
    </section>

    <section class="narrow">
      <div>
        <h2>ホラリー占星術とは</h2>
        <p>占星術と聞くと生年月日で占うことを想像されるかと思いますが、ホラリー占星術は質問を占星術師が理解した瞬間の日時で占います。それは星の働きにより伝達された瞬間ともいえます。ホラリーレインでは占星術師の理解の代わりとして、質問が明確に固まり納得した時刻を星が働いた瞬間とします。</p>
      </div>
    </section>

    <section class="blank pc-none"></section>

    <section id="which_question" class="narrow">
      <div>
        <h2>質問は何ですか？</h2>
        <ul class="pure-g">
          <li class="pure-u-1-2 pure-u-md-1-3">
            <router-link :to="{name:'predict_finding_thing'}">
              <div style="background-image:url(https://s3-ap-northeast-1.amazonaws.com/sabian-symbols/12/16.jpg)">
                なくしものはどこにありますか？<br>（失せ物探し）
              </div>
            </router-link>
          </li>
        </ul>

        <p>
          <small>ご希望の占いがある場合はぜひメッセージをください。随時追加していきたく考えております。
            <br>制作者（文月ルビー）の連絡先：<a href="https://twitter.com/rubyfmzk" target="_blank">Twitter</a> <a href="https://www.instagram.com/rubyfmzk/" target="_blank">Instagram</a>
          </small>
        </p>
      </div>
    </section>

    <section class="blank2"></section>
  </div>
</template>

<script>
import Mixin from '@/components/Common'

export default {
  name: 'Home',
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
section.blank{
    height: 30vh;
    background: transparent;
}
section.blank2{
    height: 60vh;
    background: transparent;
}
section#which_question ul{
    padding: 0;
}
section#which_question li a{
    font-weight: bold;
    width: 100%;
    display: flex;
}
section#which_question li div{
    background-position: center;
    background-size: cover;
    height: 30vw;
    width: 100%;
    padding: 10px;
}
@media (min-width: 768px){
  section#which_question li div{
    height: 260px;
  }
}
section#which_question li a{
    color: #282576;
    text-decoration: none;
    cursor: pointer;
    text-shadow:
       2px  2px 2px #ffffff99,
      -2px  2px 2px #ffffff99,
       2px -2px 2px #ffffff99,
      -2px -2px 2px #ffffff99;
}
section#which_question li a.white{
    color: #fff;
    text-decoration: none;
    text-shadow:
       2px  2px 2px #282576,
      -2px  2px 2px #282576,
       2px -2px 2px #282576,
      -2px -2px 2px #282576;
}
section#which_question li a:hover{
    opacity: 0.8;
}
</style>