<template>
  <div class="character">
    <h1>{{ title }}</h1>
    <p>{{ hash }}</p>
    <div>{{ timestamp }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const md5 = require('js-md5');

@Component
export default class Characters extends Vue {
  title: string;
  hash: string;
  timestamp: string;

  constructor() {
    super();
    this.hash = '';
    this.title = 'Character listing over here';
    this.timestamp = Date.now().toString();
  }

  created() {
    this.title = 'superman';
    const key = this.timestamp.concat('522fe777dce593a44ab2a42637852e360e4e9900').concat('232b2bd239d6b205c85a831b848d6595');

    console.info('key: ', key);
    this.hash = md5(key);
  }
}
</script>

<style>

</style>

