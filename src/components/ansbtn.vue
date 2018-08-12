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
      }, 500)
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
btn:after{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: none;
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
  background: rgb(112, 196, 112);
  opacity: 0.2;
  animation: fillToRight 0.6s;
}
.ani-error{
  animation: shake 0.6s;
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
@keyframes shake {
	0%, 80% {transform: translateX(0);}
	10%, 30%, 50%, 70% {transform: translateX(-10px);}
	20%, 40%, 60% {transform: translateX(10px);}
}
@keyframes fillToRight {
	to { 
		width: 0%;
	}
}
</style>


