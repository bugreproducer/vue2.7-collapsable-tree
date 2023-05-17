<template>
  <div id="app">
    <span class="message">
      Vue 2.7.3
    </span>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const a = { a: ref(1) };
    console.log(a);

    return {
      a,
    };
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
