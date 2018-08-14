<template>
    <div class="container">
        <p class="life icon-heart">：{{life}}</p>
        <p class="score icon-star">：{{score}}</p>
        <p :class="lifeCom">- 1</p>
        <p :class="scoreCom">+ 1</p>
        <div class="cirprogress">
            <circleprogress ref='cirpb' @timeout='navToResult'></circleprogress>
        </div>
        <p class="ques">{{ques}}</p>
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
      ques: '这是占位这是占位这是占位这是占位这是占位',
      answers: [
        'A.占位占位占位占位占位占位占位占位占位占位占位占位占占位',
        'B.占位',
        'C.占位占位占位占位占位占位占位占位占位占位占位占位占占位',
        'D.占位占位占位占位占位占位占位占位占位占位占位占位占占位'
      ],
      rightans: 0,
      score: 0,
      life: 3,
      isLifeMin: false,
      isScoreAdd: false
    }
  },
  mounted: function () {
    this.getQuestion()
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
  computed: {
    lifeCom: function () {
      let arr = []
      arr.push('lifemin')
      arr.push('icon-heart')
      if (this.isLifeMin) {
        arr.push('ani-moveUp')
      }
      return arr.join(' ')
    },
    scoreCom: function () {
      let arr = []
      arr.push('scoreadd')
      arr.push('icon-star')
      if (this.isScoreAdd) {
        arr.push('ani-moveUp')
      }
      return arr.join(' ')
    }
  },
  methods: {
    onclick: function (index) {
      var that = this
      if (index === this.rightans) {
        this.isScoreAdd = true
        setTimeout(function () {
          that.isScoreAdd = false
        }, 500)
        this.score++
        this.$refs.cirpb.startTimer()
      } else {
        this.isLifeMin = true
        this.life--
        setTimeout(function () {
          that.isLifeMin = false
        }, 500)
        if (this.life <= 0) {
          this.navToResult()
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
    },
    navToResult: function () {
      this.$refs.cirpb.cancleTimer()
      wx.redirectTo({
        url: '../result/main?score=' + this.score
      })
    },
    getQuestion: function () {
      var that = this
      wx.request({
        url: 'https://szugreenwind.club/api/questions/0',
        succcess: function (res) {
          console.log(res.data)
          that.ques = res.data.getQuestion
        }
      })
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
.lifemin{
    font-size: 70rpx;
    position: fixed;
    z-index: 1;
    opacity: 0;
}
.lifemin:before{
    margin-right: 8rpx;
    color: red;
    font-size: 70rpx;
    font-family:"icomoon" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
}
.scoreadd{
    font-size: 70rpx;
    position: fixed;
    z-index: 1;
    opacity: 0;
}
.scoreadd:before{
    margin-right: 8rpx;
    color: blue;
    font-size: 70rpx;
    font-family:"icomoon" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
}
.ani-moveUp{
  animation: moveUp 0.5s
}
@keyframes moveUp {
	0% {
		transform: translateY(100%);
		opacity: 0;
	}
	100% { 
		opacity: 1;
		transform: translateY(-100%);
	}
}
</style>


