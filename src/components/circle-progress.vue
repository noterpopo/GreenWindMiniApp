<template>
    <div class='progress_box' id='box'>
        <canvas class="progress_bg" canvas-id="bgc"></canvas>
        <canvas class="progress_canvas"   canvas-id="cpb">  </canvas>
        <div class="progress_text">
          <p style="font-size:60rpx">{{time}}</p>
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
  data: function () {
    return {
      time: 10,
      count: 200,
      countTimer: null,
      r: 0
    }
  },
  mounted: function () {
    var query = wx.createSelectorQuery()
    var that = this
    query.select('#box').boundingClientRect()
    console.log('circleProgressBarInit')
    query.exec(function (res) {
      that.r = res[0].width / 2
      console.log(that.r)
      that.initcir()
      that.drawProgress(2)
      that.countInterval()
    })
  },
  methods: {
    initcir: function () {
      var ctx = wx.createCanvasContext('bgc')
      ctx.setLineWidth(4 / 50 * this.r)// 设置圆环的宽度
      ctx.setStrokeStyle('#20183b') // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath()// 开始一个新的路径
      ctx.arc(this.r, this.r, this.r - 8 / 50 * this.r, 0, 2 * Math.PI, false)
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

      context.setLineWidth(16 / 50 * this.r)
      context.setStrokeStyle(gradient)
      context.setLineCap('round')
      context.beginPath()
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(this.r, this.r, this.r - 8 / 50 * this.r, -Math.PI / 2, step * Math.PI - Math.PI / 2, false)
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
          that.drawProgress(that.count / (200 / 2))
          that.count--
          if (that.count % 20 === 0) {
            that.time = that.count / 20
          }
        } else {
          that.$emit('timeout')
        }
      }, 50)
    },
    cancleTimer: function () {
      clearInterval(this.countTimer)
    },
    startTimer: function () {
      this.cancleTimer()
      this.count = 200
      this.time = 10
      this.countInterval()
    }
  }
}
</script>



