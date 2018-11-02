# Player


```js
<template>
  <x-player
    :state="state"
    @shuffle-click="handleShuffleClick"
    @previous-click="handlePreviousClick"
    @play-click="handlePlayClick"
    @next-click="handleNextClick"
    @repeat-click="handleRepeatClick"
  >
  </x-player>
</template>

<script>
export default {
  name: 'PlayerExample',

  methods: {
    handleShuffleClick() { alert('ShuffleClick') },
    handlePreviousClick() { alert('PreviousClick') },
    handlePlayClick() { alert('PlayClick') },
    handleNextClick() { alert('NextClick') },
    handleRepeatClick() { alert('RepeatClick') },
  },

  computed: {
    state() {
      return {
        paused: false,
        repeatMode: 2,
        shuffle: true,
        position: 92345,
        duration: 945517,
      };
    },
  },
};
</script>
```