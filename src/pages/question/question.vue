<template>
    <div class="container">
        <div class="cirprogress">
            <circleprogress ref='cirpb'></circleprogress>
        </div>
        <p class="ques">这是占位这是占位这是占位这是占位这是占位</p>
            <ul>
                <li  class="ansbtn">
                    <ansbtn icon='.icon-A' anim="ani-rigtht" :ans="answers[0]" @btnClick='onclick'></ansbtn>
                </li>
                <li  class="ansbtn">
                    <ansbtn icon='.icon-B' anim="ani-rigtht" :ans="answers[1]" @btnClick='onclick'>{{answers[1]}}</ansbtn>
                </li>
                <li  class="ansbtn">
                    <ansbtn icon='.icon-C' anim="ani-rigtht" :ans="answers[2]" @btnClick='onclick'>{{answers[2]}}</ansbtn>
                </li>
                <li  class="ansbtn">
                    <ansbtn icon='.icon-D' anim="ani-rigtht" :ans="answers[3]" @btnClick='onclick'>{{answers[3]}}</ansbtn>
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
        '占位',
        '占位',
        '占位',
        '占位'
      ]
    }
  },
  components: {
    circleprogress,
    ansbtn
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
    height: 180rpx;
    width: 180rpx;
}
.ques{
    font-size: 40rpx;
    margin: 0rpx  70rpx;
}
.ansbtn{
    margin: 60rpx 0rpx;
    height: 120rpx;
    width: 500rpx;
}
</style>


