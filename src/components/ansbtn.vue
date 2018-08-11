<template>
  <button @click="handleClick" :class="classCom" ref="btn" :disabled='isDisabled'>{{ans}}</button>
</template>

<script>
export default {
  props: {
    icon: '',
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
      arr.push(this.icon)
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
  font-family:'AaWanWan13c2ad632a1dbb2';
  font-size: 60rpx;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
	position: relative;
  background :transparent;
	color: #41403E;
  border-radius: 14rpx;
  padding-left: 100rpx;
  outline: none;
  box-shadow: 40rpx 76rpx 68rpx -52rpx rgba(0, 0, 0, 0.2);
  border-radius: 510rpx 30rpx 450rpx 30rpx/30rpx 450rpx 30rpx 510rpx;
  border: solid 4rpx #41403E;
}
.btn:before{
  position: absolute;
	width: 40%;
	font-size: 160%;
  color: #41403E;
  left: 0;
  font-family:"icomoon" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
}
.btn[disabled]{
  background: transparent;
}

/* icon */

.icon-heart:after,
.icon-star:after,
.icon-plus:after,
.icon-file:before {
	font-family: 'icomoon';
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	position: relative;
}

.icon-envelope:before {
	content: "\e000";
}

.icon-cart:before {
	content: "\e007";
}

.icon-cart-2:before {
	content: "\e008";
}

.icon-heart:before {
	content: "\e009";
}

/* Filled heart */
.icon-heart:after,
.icon-heart-2:before {
	content: "\e00a";
}

.icon-star:before {
	content: "\e00b";
}

/* Filled star */
.icon-star:after,
.icon-star-2:before {
	content: "\e00c";
}

.icon-arrow-right:before {
	content: "\e00d";
}

.icon-arrow-left:before {
	content: "\e003";
}

.icon-truck:before {
	content: "\e00e";
}

.icon-remove:before {
	content: "\e00f";
}

.icon-cog:before {
	content: "\e010";
}

.icon-plus:before,
.icon-plus:after {
	content: "\e011";
}

.icon-minus:before {
	content: "\e012";
}

.bh-icon-smiley:before {
	content: "\e001";
}

.bh-icon-sad:before {
	content: "\e002";
}

.icon-file:before {
	content: "\e004";
}

.icon-remove-2:before {
	content: "\e005";
}
.icon-A:before{
  content: "A";
}
.icon-B:before{
  content: "B";
}
.icon-C:before{
  content: "C";
}
.icon-D:before{
  content: "D";
}

/* anim */

.ani-rigtht{
    animation: fadeOutText 0.6s;
}
.ani-rigtht:before{
    animation: moveToRight 0.6s;
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

.ani-rotate::before{
  transform:rotate(200deg);
  transition:transform 0.6s linear;
}
</style>


