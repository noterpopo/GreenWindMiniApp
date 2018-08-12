<template>
    <div class="container">
        <p class="life icon-heart">：{{life}}</p>
        <p class="score icon-star">：{{score}}</p>
        <div class="cirprogress">
            <circleprogress ref='cirpb'></circleprogress>
        </div>
        <p class="ques">这是占位这是占位这是占位这是占位这是占位</p>
        <ul>
            <li  class="ansbtn" v-for="(answer,index) in answers" :key="index">
                <ansbtn :anim="animcom(index)" :ans="answers[index]" @btnClick='onclick(index)'></ansbtn>
            </li>
        </ul>
    </div>
</template>

<script>
import circleprogress from '../../components/circle-progress.vue'
import ansbtn from '../../components/ansbtn.vue'
export default {
  data: function () {
    return {
      answers: [
        'A.占位占位占位占位占位占位占位占位占位占位占位占位占占位',
        'B.占位',
        'C.占位占位占位占位占位占位占位占位占位占位占位占位占占位',
        'D.占位占位占位占位占位占位占位占位占位占位占位占位占占位'
      ],
      rightans: 0,
      score: 0,
      life: 3
    }
  },
  mounted: function () {
    this.$refs.cirpb.startTimer()
  },
  onUnload: function () {
    this.life = 3
    this.score = 0
    this.$refs.cirpb.cancleTimer()
  },
  components: {
    circleprogress,
    ansbtn
  },
  methods: {
    onclick: function (index) {
      if (index === this.rightans) {
        this.score++
        this.$refs.cirpb.startTimer()
      } else {
        this.life--
        if (this.life <= 0) {
          this.$refs.cirpb.cancleTimer()
          wx.redirectTo({
            url: '../result/main'
          })
        } else {
          this.$refs.cirpb.startTimer()
        }
      }
    },
    animcom: function (index) {
      if (this.rightans === index) {
        return 'ani-success'
      }
      return 'ani-error'
    }
  }
}
</script>

<style>
@import '../../../static/css/hpfont.css';
* {
    margin: 0rpx;
    padding: 0rpx;
}
html {
    height: 100%;
}

.container{
    background-color: #F0F0D8;
    height: 100%;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.cirprogress{
    height: 120rpx;
    width: 120rpx;
    margin-bottom: 30rpx;
}
.ques{
    font-size: 36rpx;
    margin: 10rpx  70rpx;
}
.ansbtn{
    margin: 20rpx 100rpx;
    height: 120rpx;
}
.life{
    font-size: 50rpx;
    margin-top: 30rpx;
    margin-left: 50rpx;
    position: fixed;
    left: 0rpx;
    top: 0;
}
.life:before{
    margin-right: 8rpx;
    color: red;
    font-size: 50rpx;
    font-family:"icomoon" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
}
.icon-heart:before {
	content: "\e00a";
}
.icon-star:before {
	content: "\e00c";
}
.score{
    font-size: 50rpx;
    margin-top: 30rpx;
    margin-right: 50rpx;
    position: fixed;
    right: 0rpx;
    top: 0;
}
.score:before{
    margin-right: 8rpx;
    color: blue;
    font-size: 50rpx;
    font-family:"icomoon" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
}
</style>


