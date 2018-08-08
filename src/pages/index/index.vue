<template>
    <div class="container">
       <hpbtn>开始</hpbtn>
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
@import '../../../static/css/component.css';
* {
    margin: 0px;
    padding: 0px;
}
html {
    height: 100%;
}

.container{
    background-image: url(https://pic3.zhimg.com/80/v2-3eb0435c2a892a5c3222d2454c77fb66_hd.jpg) ;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>




