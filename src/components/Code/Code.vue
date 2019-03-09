<template>
  <x-markdown class="markdown">
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
      description: 'language for syntax highlighting',
    },
  },
};
</script>

<style lang="stylus" scoped>
.markdown >>> pre
  margin 0
  border-radius var(--borderRadius)
</style>
