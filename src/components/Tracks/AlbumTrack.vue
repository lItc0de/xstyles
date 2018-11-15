<template>
  <li
    v-if="!header && track"
    @dblclick="$emit('play-track', track.uri)"
    class="track"
  >
    <div class="track-grid">
      <x-img v-if="track.album" :src="track.album.images[0].url" area="img" class="play-img"/>
      <x-text area="number" class="number">{{ track.track_number }}</x-text>
      <x-btn
        area="number"
        class="play-btn"
        size="35px"
        color="#fff"
        icon
        @click="$emit('play-track', track.uri)"
      >play-circle-outline</x-btn>
      <x-text area="name" bold>{{ track.name }}</x-text>
      <x-text area="artists" subtitle>
        {{ track.artists.map(artist => artist.name).join(', ') }}
      </x-text>
      <x-text area="duration" subtitle>{{ track.duration_ms | msToMinSec }}</x-text>
    </div>
  </li>
  <li v-else class="track-header">
    <x-text class="number">#</x-text>
    <x-text>Title</x-text>
    <x-text>Artist</x-text>
    <x-text>Duration</x-text>
  </li>
</template>

<script>
export default {
  name: 'XAlbumTrack',

  props: {
    item: {
      type: Object,
      default: null,
    },
    header: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    track() { return this.item.track; },
  },
};
</script>

<style lang="stylus" scoped>
.track-grid,
.track-header
  display grid
  grid-template-columns 50px 1fr 1fr 100px
  grid-auto-rows 35px
  grid-gap 0 16px
  align-items center
  padding 8px

.track,
.track-header
  list-style none

.track-grid
  grid-template-areas "number name artists duration"

.number
    justify-self center

.track
  .play-btn
    display none
    z-index 1

  &:hover
    border-radius 2px
    background-color #424242

    .number
      display none

    .play-btn
      display block

.track-header
  border-bottom 1px solid #424242
  margin-bottom 16px
</style>
