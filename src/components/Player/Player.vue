<template>
  <div class="player">
    <div class="row">
      <x-btn icon @click="$emit('shuffle-click')">{{ icons.shuffle }}</x-btn>
      <x-btn icon @click="$emit('previous-click')">skip-previous</x-btn>
      <x-btn icon size="40" @click="$emit('play-click')">{{ icons.playState }}</x-btn>
      <x-btn icon @click="$emit('next-click')">skip-next</x-btn>
      <x-btn icon @click="$emit('repeat-click')">{{ icons.repeatMode }}</x-btn>
    </div>
    <div class="row">
      <x-progress-bar
        :position="state.position"
        :duration="state.duration"
        :paused="state.paused"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'XPlayer',

  props: {
    state: {
      type: Object,
      required: true,
    },
  },

  computed: {
    icons() {
      const { state } = this;
      const playState = state.paused ? 'play-circle-outline' : 'pause-circle-outline';
      const repeatMode = ['repeat-off', 'repeat', 'repeat-once'][state.repeatMode];
      const shuffle = state.shuffle ? 'shuffle' : 'shuffle-disabled';
      return {
        playState,
        repeatMode,
        shuffle,
        position: state.position,
      };
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
