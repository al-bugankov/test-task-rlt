<script setup>
import { Skeleton } from 'primevue'
</script>

<template>
<div class="container">
  <div class="content">
   <div class="card">
     <div class="card__image">
       <img src="/public/Left-Side-Panel/LeftSidePanelImg.png" alt='Some Image' width="208" height="240" />
     </div>
     <div class="card__description">
       <Skeleton class="custom-skeleton" width="10rem" height="4rem"></Skeleton>
       <Skeleton class="custom-skeleton"></Skeleton>
       <Skeleton class="custom-skeleton"></Skeleton>
       <Skeleton class="custom-skeleton"></Skeleton>
       <Skeleton class="custom-skeleton"></Skeleton>
     </div>
   </div>
  </div>
</div>
</template>

<style scoped>

.card {
  width: 236px;
  height: 500px;
 background-color: var(--item-background-color);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.content {
  display: flex;
}

.card__image {
  width: 208px;
  height: 240px;
  margin-top: 18px;
  margin-bottom: 20px;
  margin-inline: 14px;
}

.card__description {
  width: 190px;
  height: 198px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: 23px;
}
</style>
