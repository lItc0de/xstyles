<template>
  <div class="player">
    <div class="row">
      <btn icon @click="handleShuffleClick">shuffle</btn>
      <btn icon @click="handlePreviousClick">skip-previous</btn>
      <btn icon size="40" @click="handlePlayClick">play-circle-outline</btn>
      <btn icon @click="handleNextClick">skip-next</btn>
      <btn icon @click="handleRepeatClick">repeat</btn>
    </div>
    <div class="row">
      <progress-bar value="0"></progress-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',

  props: {
    handleShuffleClick: {
      type: Function,
      required: true,
    },
    handlePreviousClick: {
      type: Function,
      required: true,
    },
    handlePlayClick: {
      type: Function,
      required: true,
    },
    handleNextClick: {
      type: Function,
      required: true,
    },
    handleRepeatClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.player
  display flex
  flex-flow column
  .row
    display flex
    justify-content center
    align-items center
</style>

