<template>
    <div class="container">
        <canvas ref="circle" width="200" height="200"></canvas>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      hello: 'hello'
    }
  },
  mounted: function () {
    var cir = this.$refs.circle
    var ctx = cir.getContext('2d')
    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, false)

    // new added
    ctx.lineWidth = 15

    ctx.strokeStyle = 'red'
    ctx.stroke()
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


