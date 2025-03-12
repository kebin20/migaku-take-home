<template>
  <div class="hero-section">
    <img src="@/assets/icons/hero/planets-a.png" alt="Image 1" class="image purple-planet" />
    <img src="@/assets/icons/hero/planets-b.png" alt="Image 2" class="image comet" />
    <button class="heart-button" @click="toggleHeart">
      <img :src="isPressed ? pressedHeart : normalHeart" class="image migaku-heart" alt="Heart" />
    </button>
    <img src="@/assets/icons/hero/planets-d.png" alt="Image 5" class="image planets" />
    <img src="@/assets/icons/hero/planets-c.png" alt="Image 4" class="image earth" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import normalHeart from '@/assets/icons/hero/migaku-heart.png'
import pressedHeart from '@/assets/icons/hero/migaku-heart-pressed.png'

const isPressed = ref(false)

const toggleHeart = () => {
  isPressed.value = true
  setTimeout(() => {
    isPressed.value = false
  }, 80)
}
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 150px;
}

.image {
  position: absolute;
}

.purple-planet {
  width: 47%;
  top: -43%;
  left: 3%;
  z-index: -1;
}

.comet {
  width: 14%;
  top: -43%;
  left: 66%;
}

.migaku-heart {
  width: 169px;
  transition: transform 0.3s ease;
}

.heart-button {
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  top: -10%;
  left: 27%;
  cursor: pointer;
  z-index: 10;
}

.earth {
  width: 27%;
  top: 53%;
  left: 2%;
}

.planets {
  top: 25%;
  left: 60%;
  width: 33%;
}
</style>
