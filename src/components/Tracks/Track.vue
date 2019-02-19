<template>
  <li
    v-if="!header && track"
    @dblclick="$emit('play-track', track.uri)"
    class="track"
  >
    <div class="track-grid">
      <x-img :src="track.album.images[0].url" class="play-img"/>
      <x-btn
        class="play-btn"
        size="35px"
        color="#fff"
        icon
        @click="$emit('play-track', track.uri)"
      >play-circle-outline</x-btn>
      <x-text class="name" bold>{{ track.name }}</x-text>
      <x-text class="artists" subtitle>
        <x-text
          v-for="(artist, index) in track.artists"
          :key="artist.id"
          inline
        >
          <x-link
            :to="{ name: 'Artist', params: { id: artist.id } }"
            underline
          >
            {{ artist.name }}
          </x-link>
          {{ index !== track.artists.length - 1 ? ', ' : '' }}
        </x-text>
      </x-text>
      <x-link
        class="album"
        :to="{ name: 'Album', params: { id: track.album.id } }"
        subtitle
        underline
      >
        {{ track.album.name }}
      </x-link>
      <x-text class="added" subtitle>{{ item.added_at | toHumanTime }}</x-text>
      <x-text class="duration" subtitle>{{ track.duration_ms | msToMinSec }}</x-text>
    </div>
  </li>
  <li v-else class="track-header">
    <x-text></x-text>
    <x-text>Title / Artist</x-text>
    <x-text>Album</x-text>
    <x-text>Added</x-text>
    <x-text>Duration</x-text>
  </li>
</template>

<script>
export default {
  name: 'XTrack',

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
  grid-template-columns 50px 1fr 1fr 200px 100px
  grid-gap 0 16px
  align-items center
  padding 8px

.track,
.track-header
  list-style none

.track-grid
  grid-template-areas \
    "img name album added duration" \
    "img artists album added duration"

.track
  .play-btn
    grid-area 'img'
    display none
    z-index 1

  .play-img
    grid-area 'img'

  .name
    grid-area 'name'

  .artists
    grid-area 'artists'

  .album
    grid-area 'album'

  .added
    grid-area 'added'

  .duration
    grid-area 'duration'

  &:hover
    border-radius var(--borderRadius)
    background-color var(--backgroundColorLight)

    .play-img
      filter blur(2px) brightness(.5)

    .play-btn
      display block

.track-header
  border-bottom 1px solid var(--backgroundColorLight)
  margin-bottom 16px
</style>
