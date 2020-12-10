<template>
  <div class="controls">
    <div class="keys-list">
      <Key :text="'⇦'" />
      <Key :text="'⇧'" />
      <Key :text="'⇩'" />
      <Key :text="'⇨'" />
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key.vue';

export default {
  name: 'App',
  components: {
    Key
  }
};
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #0d1117;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.controls {
  bottom: 0;
  width: 100%;
  position: fixed;
  padding: 24px 16px 48px;
  border-top: 1px solid #21262d;
}

.keys-list {
  column-gap: 8px;
  display: inline-grid;
  grid-template-columns: repeat(4, 2.75rem);
}
</style>
