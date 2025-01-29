<script setup>
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/stores/appStore.js'
import ModalPage from '@/components/layouts/ModalPage.vue'

const appStore = useAppStore()

const gridItems = 25;
const gridFiller = ref(Array(gridItems))
const draggedItem = ref(null);

const savePositionToLocalStorage = () => {
  localStorage.setItem('gridImagesPosition', JSON.stringify(gridFiller.value));
}

const loadFromLocalStorage = () => {
  console.log('зашли в load')
  const saveData = localStorage.getItem('gridImagesPosition');
  if (saveData) {
    console.log('saveData найдена')
    const parsedData = JSON.parse(saveData);
    // Отрисовываем объекты в другом месте при изменении данных в Local Storage вручную
    parsedData.forEach((item) => {
      if (item && item.position) {
        gridFiller.value[item.position - 1] = item;
      }
    });
    console.log('images.value после парса saveData', gridFiller.value);
    return
  }
  console.log('saveData не найдена, идем в инициализацию')
  initializeData(gridFiller)
}

const initializeData = (gridFiller) => {
  console.log('Пришли в инициализацию')
  const data = [
    { id: 1, image: '/cells/cell1.jpg', count: 4, position: 1 },
    { id: 2, image: '/cells/cell2.jpg', count: 2, position: 2 },
    { id: 3, image: '/cells/cell3.jpg', count: 5, position: 3 },
  ];
  data.forEach(obj => {
    gridFiller.value[obj.position - 1] = obj;
  });
    console.log('инициализация прошла', gridFiller.value);
    savePositionToLocalStorage()
    console.log('Записали в память')
  return gridFiller
}

const onDragStart = (item, event) => {
  draggedItem.value = item;
  event.dataTransfer.setData('text/plain', item.id);
  event.currentTarget.classList.add('dragging');
};

const onDragEnd = (event) => {
  event.currentTarget.classList.remove('dragging');
  draggedItem.value = null;
};

const onDragOver = (event) => {
  event.preventDefault();
};

const onDrop = (index) => {
  if (draggedItem.value) {
    const oldPosition = draggedItem.value.position - 1;
    const newPosition = index;

    if (!gridFiller.value[newPosition]) {
      const newItem = { ...draggedItem.value, position: newPosition + 1 };
      gridFiller.value[oldPosition] = null;
      gridFiller.value[newPosition] = newItem;

      appStore.showDialog = false;
      savePositionToLocalStorage();
    }
  }
};

const showItem = (item) => {
  if (item) {
    appStore.setItem(item)
  }
}

onMounted(() => {
  console.log('на старте',gridFiller.value)
  loadFromLocalStorage()
})

</script>

<template>
  <div class="content">
    <div class="grid-container">
      <modal-page/>
      <div
        v-for="(item, index) in gridFiller"
        :key="index"
        class="grid-item"
        @click="showItem(item)"
        :class="{
          'top-left': index === 0,
          'top-right': index === 4,
          'bottom-left': index === 20,
          'bottom-right': index === 24
        }"
        @dragover="onDragOver"
        @drop="onDrop(index)"
      >
        <div
          v-if="item && item.count > 0"
          class="grid-item__image-wrapper"
          draggable="true"
          @dragstart="onDragStart(item, $event)"
          @dragend="onDragEnd"
        >
          <img :src="item.image" alt="image" />
          <div class="grid-item__counter-wrapper">
            <span class="grid-item__counter">{{ item.count }}</span>
          </div>
      </div>
    </div>
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
  position: relative;
}

.grid-item {
  position: relative;
  background-color: var(--item-background-color);
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.grid-item:hover {
  cursor: pointer;
}

.grid-item__counter-wrapper {
  position: absolute;
  top: 75%;
  right: 0;
  width: 20%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  border-radius: 10px 0 0 0; ;
}
.grid-item__counter {
  color: var(--counter-color);
}

.grid-item.top-left {
  border-top-left-radius: var(--border-radius);
}

.grid-item.top-right {
  border-top-right-radius: var(--border-radius);
}

.grid-item.bottom-left {
  border-bottom-left-radius: var(--border-radius);
}

.grid-item.bottom-right {
  border-bottom-right-radius: var(--border-radius);
}

.grid-item__image-wrapper.dragging {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
