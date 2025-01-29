<script setup>
import { Skeleton } from 'primevue'
import CloseButton from '@/components/buttons/CloseButton.vue'
</script>

<template>
<div class="content">
<div class="skeleton-container">
  <Skeleton class="custom-skeleton" width="700px" height="36px"></Skeleton>
</div>
<close-button/>
</div>
</template>

<style scoped>
.content {
  width: 785px;
  height: 72px;
  background-color: var(--item-background-color);
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}
.skeleton-container {
  width: 740px;
  height: 36px;
}

.custom-skeleton {
  margin-left: 18px;
}
</style>
