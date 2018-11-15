<template>
  <div class="img-grid"><slot/></div>
</template>

<script>
export default {
  name: 'XImgGrid',
};
</script>

<style lang="stylus" scoped>
.img-grid
  display grid
  grid-template-columns repeat(5, 1fr)
  grid-gap 24px
  justify-items stretch
</style>
