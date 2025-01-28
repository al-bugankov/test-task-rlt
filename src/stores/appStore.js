import {defineStore} from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    showDialog: false,
    showConfirmRemove: false,
    item: {
      id: '',
      image: '',
      count: '',
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
  if (inputValue <= this.item.count) {
    this.item.count -= inputValue
    this.showDialog = false
  }
  else {
    alert('Нельзя удалить больше предметов чем у нас есть!')
  }
},
  }
})
