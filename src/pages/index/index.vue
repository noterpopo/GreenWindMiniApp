<template>
    <div class="container">
        <p class="title">绿色风招新小程序</p>
       <ul>
           <li class="btn" ><hpbtn icon='.icon-arrow-right' anim="ani-rigtht" @btnClick='onclick'>开始</hpbtn></li>
           <li class="btn"><hpbtn icon='icon-cog' anim="ani-rotate">关于</hpbtn></li>
       </ul>
    </div>
</template>

<script>
import hpbtn from '../../components/hpbtn.vue'

export default {
  data: function () {
    return {

    }
  },
  components: {
    hpbtn
  },
  computed: {

  },
  methods: {
    onclick: function () {
      wx.navigateTo({
        url: '../question/main'
      })
    }
  }
}
</script>

<style>
@import '../../../static/css/hpfont.css';
* {
    margin: 0px;
    padding: 0px;
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
.btn{
    margin: 30px 0px;
    height: 60px;
    width: 250px;
}
.title{
    font-family:'AaWanWan13c2ad632a1dbb2';
    font-size: 40px;
    color: #41403E;
    margin-bottom: 30px;
}
</style>




