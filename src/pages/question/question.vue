<template>
    <div class="container">
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
      rightans: 0
    }
  },
  components: {
    circleprogress,
    ansbtn
  },
  methods: {
    onclick: function (index) {
      if (index === this.rightans) {

      } else {

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
</style>


