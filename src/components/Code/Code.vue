<template>
  <x-markdown>
```{{ language }}
<slot/>
```
</x-markdown>
</template>

<script>
export default {
  name: 'XCode',

  props: {
    language: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.prism
  margin 0
  padding 1.5rem
  border-radius var(--borderRadius)
  background-color var(--color)
</style>
