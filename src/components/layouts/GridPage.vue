<script setup>
const gridItems = 25; // Количество элементов в сетке (5x5)
</script>

<template>
  <div class="content">
    <div class="grid-container">
      <div v-for="n in gridItems" :key="n" class="grid-item"></div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 525px;
  height: 500px;
}

.grid-item {
  background-color: var(--item-background-color);
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
}
.grid-item:nth-child(1) {
  border-top-left-radius: var(--border-radius);
}

.grid-item:nth-child(5) {
  border-top-right-radius: var(--border-radius);
}

.grid-item:nth-last-child(5) {
  border-bottom-left-radius: var(--border-radius);
}

.grid-item:nth-last-child(1) {
  border-bottom-right-radius: var(--border-radius);
}
</style>
