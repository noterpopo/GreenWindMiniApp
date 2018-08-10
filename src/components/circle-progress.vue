<template id='app'>
    <div class='progress_box'>
        <canvas class="progress_bg" canvas-id="bgc" ref="bgc"></canvas>
    </div>
</template>
<style>
.progress_box{
  position: relative;
  width:220px;
  height: 220px;  
  background-color: #152;
}
.progress_bg{
    width: 50%;
    height: 50%;
}
.progress_canvas{ 
  width:220px;
  height: 220px; 
} 
.progress_text{ 
  position: absolute; 
  display: flex;  
  align-items: center;
  justify-content: center
}
.progress_info{   
  font-size: 36rpx;
  padding-left: 16rpx;
  letter-spacing: 2rpx
} 
.progress_dot{
  width:16rpx;
  height: 16rpx;  
  border-radius: 50%;
  background-color: #fb9126;
}
</style>

<script>
export default {
  mounted: function () {
    console.log('h')
    this.initcir()
  },
  methods: {
    initcir: function () {
      let c = this.$refs.bgc
      var ctx = c.getContext('2d')
      ctx.beginPath()
      ctx.arc(95, 50, 40, 0, 2 * Math.PI)
      ctx.stroke()
    }
  }
}
</script>



