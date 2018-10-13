<template>
  <layout id="xstyles">
    <nav-bar>
      <ul>
        <li v-for="component in componentNames" :key="component">
          <router-link :to="`/components/${component}`">
            {{ component }}
          </router-link>
        </li>
      </ul>
    </nav-bar>
    <router-view/>
  </layout>
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

