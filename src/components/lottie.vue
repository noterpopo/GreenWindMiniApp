<template>
    <canvas canvas-id="lottie-canvas"></canvas>
</template>
<script>
import lottie from 'lottie-miniapp'
import animationData from '../../static/json/test.json'
export default {
  props: {
    width: 0,
    height: 0,
    isloop: false,
    isauto: false
  },
  onLoad: function (options) {
    console.log('lottie-isready')
    console.log(options.score)
    const canvasContext = wx.createCanvasContext('lottie-canvas')
    canvasContext.canvas = {
      width: this.width,
      height: this.height
    }
    lottie.loadAnimation({
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        context: canvasContext,
        clearCanvas: true
      }
    })
  }
}
</script>

