<template>
  <x-layout id="xstyles">
    <x-nav-bar>
      <ul>
        <li v-for="component in componentNames" :key="component">
          <router-link :to="`/components/${component}`">
            {{ component }}
          </router-link>
        </li>
      </ul>
    </x-nav-bar>
    <router-view/>
  </x-layout>
</template>

<script>
import { componentNames } from '@/components';

export default {
  name: 'XStyles',

  data() {
    return {
      componentNames,
    };
  },
};
</script>

