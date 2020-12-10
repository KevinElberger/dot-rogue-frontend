<template>
  <div class="key">{{text}}</div>
</template>

<script>
export default {
  name: 'Key',
  props: ['text']
}
</script>

<style scoped>
.key {
  color: #8b949e;
  cursor: pointer;
  font-weight: 700;
  display: inline-flex;
  font-size: 1.15rem;
  min-width: 2.75rem;
  height: 2.75rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  background-color: #161b22;
}

.key:hover {
  color: #58a6ff;
}
</style>
