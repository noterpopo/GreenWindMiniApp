<template>
    <div class="container">
        <div class="cirprogress">
            <circleprogress ref='cirpb'></circleprogress>
        </div>
        <div class="ques">Helooooooooo</div>
            <ul>
                <li>AAAAA</li>
                <li>BBBBB</li>
                <li>CCCCCCC</li>
                <li>DDDDDDD</li>
            </ul>
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
</style>


