import {defineStore} from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    showDialog: false,
    showConfirmRemove: false,
    item: {
      id: '',
      image: '',
      count: 0,
      position: ''
    },
    selectedFilterResult: '',
  }),
getters: {},
  actions: {
    setItem(item) {
  this.item = item
  this.showDialog = true
},
    deleteItem(inputValue) {
  if (inputValue <= this.item.count && inputValue > 0) {
    this.item.count -= inputValue
    this.showDialog = false
    this.updateLocalStorage()
  }
  else {
    alert('Нельзя удалить больше предметов чем у нас есть!')
  }
},
    updateLocalStorage() {
      const saveData = localStorage.getItem('gridImagesPosition');
      if (saveData) {
        const parsedData = JSON.parse(saveData);
        const updatedItemIndex = parsedData.findIndex(
          (item) => item?.id === this.item.id
        );
        if (updatedItemIndex !== -1) {
          parsedData[updatedItemIndex].count = this.item.count;
          localStorage.setItem('gridImagesPosition', JSON.stringify(parsedData));
        }
      }
    }
  }
});
