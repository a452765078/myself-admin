<template>
  <div class="test" @click="handleClose">test</div>
</template>
<script setup>
const handleClose = () => {
  document.body.removeChild(document.querySelector('.test'))
}
</script>
<style lang="scss">
.test {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
}
</style>
