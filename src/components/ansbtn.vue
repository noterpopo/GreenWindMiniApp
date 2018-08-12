<template>
<button @click="handleClick" :class="classCom" ref="btn" :disabled='isDisabled'>{{ans}}</button>
</template>

<script>
export default {
  props: {
    anim: '',
    ans: ''
  },
  data: function () {
    return {
      className: {
        'btn-active': false
      },
      isDisabled: false
    }
  },
  computed: {
    classCom: function () {
      let arr = []
      arr.push('btn')
      if (this.className['btn-active']) {
        arr.push(this.anim)
      }
      return arr.join(' ')
    }
  },
  methods: {
    handleClick: function () {
      this.isDisabled = true
      var that = this
      this.className['btn-active'] = true
      setTimeout(function () {
        that.className['btn-active'] = false
        that.isDisabled = false
        that.$emit('btnClick')
      }, 560)
    }
  }

}
</script>

<style scoped>
@import '../../static/css/hpfont.css';

.btn{
  font-size: 34rpx;
  text-align: left;
  line-height: 56rpx;
  height: 100%;
  width: 100%;
  line-break: normal;
  background: transparent;
	color: #41403E;
  border-radius: 14rpx;
  border-radius: 510rpx 30rpx 450rpx 30rpx/30rpx 450rpx 30rpx 510rpx;
  border: solid 4rpx #41403E;
}
.btn[disabled]{
  background: transparent;
}

/* icon */


/* anim */

.ani-fadeout{
    animation: fadeOutText 0.6s;
}
.ani-rigtht{
    animation: moveToRight 0.6s;
}
.ani-success:after{
  z-index: 1;
  content: ' 正确';
  animation: moveUp 0.6s;
}

@keyframes fadeOutText {
	0% { color: transparent; }
	80% { color: transparent; }
	100% { color: #41403E; }
}
@keyframes moveToRight {
	80% { transform: translateX(250%); }
	81% { opacity: 1; transform: translateX(250%); }
	82% { opacity: 0; transform: translateX(250%); }
	83% { opacity: 0; transform: translateX(-50%); }
	84% { opacity: 1; transform: translateX(-50%);  }
	100% { transform: translateX(0%); }
}
@keyframes moveUp {
	0% {
		transform: translateY(50%);
		opacity: 0;
	}
	100% { 
		opacity: 1;
		transform: translateY(0);
	}
}
</style>


