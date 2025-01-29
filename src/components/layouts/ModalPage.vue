<script setup>
import { useAppStore } from '@/stores/appStore.js'
import { Skeleton } from 'primevue'
import CloseButton from '@/components/buttons/CloseButton.vue'
import { ref } from 'vue'

const appStore = useAppStore()

const inputValue = ref('')

const startEdit = () => {
  appStore.showConfirmRemove = true
}

const cancelEdit = () => {
  appStore.showConfirmRemove = false
}

const confirmDelete = () => {
appStore.deleteItem(inputValue.value)
  inputValue.value = ''
}

</script>

<template>
    <div v-if="appStore.showDialog" class="dialog-container">
      <div class="dialog-content">
        <div class="dialog__icon-container" @click="appStore.showDialog = false">
          <close-button/>
        </div>
        <div class="item__item-image">
          <img :src="appStore.item.image" alt="Describe Image">
        </div>

        <div class="item__item-description">
          <div class="divider"></div>
          <Skeleton class="custom-skeleton" width="10rem" height="2rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
          <Skeleton class="custom-skeleton" width="10rem" height="0.5rem"></Skeleton>
        </div>
        <div class="item__action-container">
          <div v-if="appStore.showConfirmRemove">
            <input class='action-container__input input' v-model.number="inputValue" type="number" placeholder="Введите количество" />
            <div class="action-container__buttons">
              <Button class="item__cancel-button" @click="cancelEdit">Отмена</Button>
              <Button class="item__confirm-button" @click="confirmDelete">Подтвердить</Button>
            </div>
          </div>
          <div v-else class="action-container__buttons">
            <button class="item__delete-button" @click="startEdit">Удалить предмет</button>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.dialog-container {
  background-color: var(--item-background-color);
  border-radius: var(--border-radius);
  position: absolute;
  height: 500px;
  width: 250px;
  top: 0;
  right: -300px;
  animation: slideIn 0.5s forwards;
  z-index: 10;
  overflow: hidden;
}

.item__item-description {
  flex-direction: column;
  margin-block: 15px;
  align-items: center;
}

.item__item-image,
.action-container__buttons,
.item__item-description {
  display: flex;
  justify-content: center;
  width: 250px;
}


::v-deep(.p-dialog),
.item__item-image,
.item__item-description,
.action-container__buttons {
  width: 250px;
}

.item__delete-button {
  width: 220px;
  height: 39px;
  background-color: var(--primary-red);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
}

.divider {
  margin-block: 10px;
  width: 80%;
  height: 1px;
  background-color: var(--border-color);
}

.action-container__input {
  width: 100%;
  max-width: 210px;
  height: 40px;
  margin: 0 auto;
  display: block;
  background-color: var(--item-background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: var(--text-color)
}

.action-container__buttons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}

.item__cancel-button,
.item__confirm-button {
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  height: 33px;
}

.item__cancel-button {
  width: 88px;
  background-color: white;
  color: black;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.item__confirm-button {
  width: 112px;
  background-color: var(--primary-red);
  color: white;
  border: none;
}

.action-container__input::-webkit-outer-spin-button,
.action-container__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

@keyframes slideIn {
  0% {
    right: -300px;
  }
  100% {
    right: 0;
  }
}
</style>
