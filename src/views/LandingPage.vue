<script setup>
import LeftSidePanel from '@/components/layouts/LeftSidePanel.vue'
import FooterPage from '@/components/layouts/FooterPage.vue'
import GridPage from '@/components/layouts/GridPage.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const themeSwitcher = document.getElementById('theme-switcher')

  const htmlDocument = document.documentElement

  const toggleTheme = () => {
    const newTheme = themeSwitcher?.checked ? 'light' : 'dark'
    htmlDocument.setAttribute('data-theme', newTheme)
  }

  themeSwitcher?.addEventListener('change', toggleTheme)
})
</script>

<template>
  <div class="container">
    <div class="container__theme-switcher">
      <label class="switch">
        <input id="theme-switcher" type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
    <div class="content">
      <div class="content__visual-foundation">
        <left-side-panel />
        <grid-page />
      </div>
      <footer-page />
    </div>
  </div>
</template>


<style scoped>

.container__theme-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}

.content__visual-foundation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.switch {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 50px;
  height: 17px;
  background-color: var(--theme-switcher);
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.4s;
  margin-left: 5px;
}

.switch input {
  display: none;
}

.slider {
  width: 15px;
  height: 15px;
  background: url('/public/icons/theme-switcher-icons/moon.svg') no-repeat center/contain;
  border-radius: 50%;
  transition:
    transform 0.4s,
    background-image 0.4s;
  margin: 2px;
}

input:checked + .slider {
  transform: translateX(31px);
  background: url('/public/icons/theme-switcher-icons/sun.svg') no-repeat center/contain;
}

input:checked ~ .switch {
  background-color: green; /* новый цвет фона для switch */
}
</style>
