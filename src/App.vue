<template>
  <div class="wedding">
    <editor />
  </div>
</template>

<script setup lang="ts">
import Editor from "./components/Editor.vue";
</script>

<style lang="less">
@import "@/assets/base.less";
@import "@/assets/prism-okaidia.css";

.wedding {
  width: calc(24.5rem);
  margin: 0 auto;
  height: 100%;
  position: relative;
  z-index: 2;
}
</style>
