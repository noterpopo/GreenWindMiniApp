<template>
    <button @click="handleClick" :class="isActived"><slot></slot></button>
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
      if (isActive) {
        return 'btn-active'
      } else {
        return ''
      }
    }
  },
  methods: {
    handleClick: function () {

    }
  }

}
</script>

<style scoped>
.btn-active{
    background-color: aqua;
}
</style>


