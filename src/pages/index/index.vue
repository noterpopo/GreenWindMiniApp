<template>
    <div class="container">
       <ul>
           <li><img src="../../../static/img/title.png"></li>
           <li class="btn"><hpbtn>开始</hpbtn></li>
           <li class="btn"><hpbtn>关于</hpbtn></li>
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

  }
}
</script>

<style>
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
}
.btn{
    margin: 30px 0px;
}
img{
    height: 80px;
    width: 240px;
}
</style>




