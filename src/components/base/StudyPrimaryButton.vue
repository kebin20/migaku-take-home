<template>
  <button @click="handleClick" class="study-button">
    <img v-if="isSpinning" :src="migakuHead" class="migaku-head" />
    <p v-else>STUDY {{ noOfCards }} NEW CARDS</p>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'
import migakuHead from '@/assets/icons/loading-button/head-up.png'

const { noOfCards } = defineProps<{
  noOfCards: number
}>()

const isSpinning = ref(false)

const handleClick = () => {
  isSpinning.value = true
  setTimeout(() => {
    isSpinning.value = false
  }, 2000)
}
</script>

<style scoped>
.study-button {
  font-family: 'GT Maru', sans-serif;
  font-weight: bold;
  width: 319px;
  height: 40px;
  border-radius: 2000px;
  background: var(--color-primary-gradient);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;
}

.migaku-head {
  position: absolute;
  width: 36px;
  height: 36px;
  animation: spin 2s linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
