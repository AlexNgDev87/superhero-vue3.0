<template>
  <div class="home-page">
    <img src="../assets/main.jpg" class="main-image" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-image {
  width: 600px;
  height: 300px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
}
</style>
