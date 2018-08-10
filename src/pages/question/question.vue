<template>
    <div class="container">
        <circleprogress></circleprogress>
    </div>
</template>

<script>
import circleprogress from '../../components/circle-progress.vue'

export default {
  data: function () {
    return {
      hello: 'hello'
    }
  },
  components: {
    circleprogress
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
    flex-direction: column;
}
</style>


