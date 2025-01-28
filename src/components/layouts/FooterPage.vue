<script setup>
import { Skeleton } from 'primevue'
</script>

<template>
<div class="content">
<div class="skeleton-container">
  <Skeleton class="custom-skeleton"  width="700px" height="36px"></Skeleton>
</div>
  <div class="icon-container">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
        fill="currentColor"
      />
    </svg>
  </div>
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
}
.skeleton-container {
  width: 740px;
  height: 36px;
}

.custom-skeleton {
  margin-left: 18px;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 14px;
  padding-right: 14px;
}
</style>
