<template>
  <div class="key" @click="$emit('clicked', text)">
    {{text}}
  </div>
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
  user-select: none;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border: 1px solid #30363d;
  font-family: Inter, sans-serif;
  background-color: #161b22;
}

.key:hover {
  color: #58a6ff;
  border-color: #8b949e;
}
</style>
