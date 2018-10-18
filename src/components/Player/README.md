# Player


```js
<template>
  <player
    :handle-shuffle-click="handleShuffleClick"
    :handle-previous-click="handlePreviousClick"
    :handle-play-click="handlePlayClick"
    :handle-next-click="handleNextClick"
    :handle-repeat-click="handleRepeatClick"
  >
  </player>
</template>

<script>
export default {
  name: 'PlayerExample',

  methods: {
    handleShuffleClick() {},
    handlePreviousClick() {},
    handlePlayClick() {},
    handleNextClick() {},
    handleRepeatClick() {},
  },
};
</script>
```