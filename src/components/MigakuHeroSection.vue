<template>
  <div class="hero-section">
    <img src="@/assets/hero/planets-a.png" alt="Purple Planet" class="image purple-planet" />
    <img src="@/assets/hero/planets-b.png" alt="Comet" class="image comet" />
    <button class="heart-button" @click="toggleHeart">
      <img
        :src="isPressed ? pressedHeart : normalHeart"
        class="image migaku-heart"
        alt="Migaku Heart"
      />
    </button>
    <img src="@/assets/hero/planets-d.png" alt="Planets" class="image planets" />
    <img src="@/assets/hero/planets-c.png" alt="Earth" class="image earth" />
  </div>
</template>

<script setup lang="ts">
import normalHeart from '@/assets/hero/migaku-heart.png'
import pressedHeart from '@/assets/hero/migaku-heart-pressed.png'
import { ref } from 'vue'

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
