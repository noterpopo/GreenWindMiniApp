<template>
    <div class='progress_box'>
        <canvas class="progress_bg" canvas-id="bgc"></canvas>
        <canvas class="progress_canvas"   canvas-id="cpb">  </canvas>
        <div class="progress_text">
          <p style="font-size:30px">{{time}}</p>
        </div>
    </div>
</template>
<style>
.progress_box{
  position: relative;
  width:100%;
  height: 100%;  
  display: flex;  
  align-items: center;
  justify-content: center;
}
.progress_bg{
  position: absolute;
  width:100%;
  height: 100%; 
}
.progress_canvas{ 
  width:100%;
  height: 100%; 
} 
.progress_text{ 
  position: absolute; 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>

<script>
export default {
  props: {
    radius: 0
  },
  data: function () {
    return {
      time: 15,
      count: 300,
      countTimer: null
    }
  },
  mounted: function () {
    console.log('circleProgressBarInit')
    this.initcir()
    this.drawProgress(2)
    this.countInterval()
  },
  methods: {
    initcir: function () {
      var ctx = wx.createCanvasContext('bgc')
      ctx.setLineWidth(4)// 设置圆环的宽度
      ctx.setStrokeStyle('#20183b') // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath()// 开始一个新的路径
      ctx.arc(this.radius / 2, this.radius / 2, this.radius / 2 - 15, 0, 2 * Math.PI, false)
      // 设置一个原点(110,110)，半径为100的圆的路径到当前路径
      ctx.stroke()// 对当前路径进行描边
      ctx.draw()
    },
    drawProgress: function (step) {
      var context = wx.createCanvasContext('cpb')
      // 设置渐变
      var gradient = context.createLinearGradient(200, 100, 100, 200)
      gradient.addColorStop('0', '#2661DD')
      gradient.addColorStop('0.5', '#40ED94')
      gradient.addColorStop('1.0', '#5956CC')

      context.setLineWidth(10)
      context.setStrokeStyle(gradient)
      context.setLineCap('round')
      context.beginPath()
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(this.radius / 2, this.radius / 2, this.radius / 2 - 15, -Math.PI / 2, step * Math.PI - Math.PI / 2, false)
      context.stroke()
      context.draw()
    },
    countInterval: function () {
      var that = this
      // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
      this.countTimer = setInterval(() => {
        if (that.count > 0) {
        /* 绘制彩色圆环进度条
        注意此处 传参 step 取值范围是0到2，
        所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
        */
          that.drawProgress(that.count / (300 / 2))
          that.count--
          if (that.count % 20 === 0) {
            that.time = that.count / 20
          }
        } else {
          clearInterval(that.countTimer)
        }
      }, 50)
    }
  }
}
</script>



