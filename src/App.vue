<template>
  <div id="app">
    <Tree :tree="tree" />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  import Tree from "@/components/Tree/Tree.vue";

  import { data as tree } from "@/data/tree"

  export default Vue.extend({
    name: "App",
    components: {
      Tree,
    },
    data() {
      return {
        tree,
      }
    }
  });
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
