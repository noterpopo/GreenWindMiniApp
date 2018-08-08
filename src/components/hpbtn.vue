<template>
    <button class=“” @click="handleClick" :class="isActived"><slot></slot></button>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false
    }
  },
  computed: {
    isActived: function () {
      if (this.isActive) {
        return 'btn-active btn icon-arrow-right'
      } else {
        return 'btn icon-arrow-right'
      }
    }
  },
  methods: {
    handleClick: function () {
      this.isActive = !this.isActive
    }
  }

}
</script>

<style scoped>

@font-face {
	font-family: 'icomoon';
	src:url('../../static/fonts/icomoon/icomoon.eot');
	src:url('../../static/fonts/icomoon/icomoon.eot?#iefix') format('embedded-opentype'),
		url('../../static/fonts/icomoon/icomoon.woff') format('woff'),
		url('../../static/fonts/icomoon/icomoon.ttf') format('truetype'),
		url('../../static/fonts/icomoon/icomoon.svg#icomoon') format('svg');
	font-weight: normal;
	font-style: normal;
}
.btn{
  font-size: 120%;
  height: 40px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
	position: relative;
  background :transparent;
	color: #41403E;
  border-radius: 7px;
  padding-left: 50px;
  outline: none;
  box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 2px #41403E;
}
.btn:before{
  position: absolute;
	width: 40%;
	font-size: 150%;
  color: #41403E;
  left: 0;
  font-family:"icomoon" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
}

.btn-active{
    animation: fadeOutText 0.5s;
}
.btn-active:before{
    animation: moveToRight 0.5s;
}
.icon-arrow-right:before {
  content: "\e00d";
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
</style>


