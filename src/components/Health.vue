<template>
  <div class="health-container">
    <div v-for="index in health" :key="index" class="health"></div>
  </div>
</template>

<script>
export default {
  name: 'Health',
  props: ['health']
}
</script>

<style scoped>
.health-container {
  width: 100%;
  display: grid;
  grid-gap: 8px;
  padding: 8px 0;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 16px);
}
.health {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: #da3633;
  border: 1px solid #f85149;
}
</style>
