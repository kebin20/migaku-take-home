<template>
  <header>
    <ProgressNavBar @open-loading="openLoading" />
  </header>
  <main>
    <MigakuHeroSection />
    <div class="carousel-section">
      <CardsCarousel title="Today" :cards="today" isToday />
      <CardsCarousel title="Completed" :cards="completedDecks" />
    </div>
  </main>
  <footer>
    <BottomNavBar />
  </footer>
  <LoadingScreen v-if="isLoading" />
</template>

<script setup lang="ts">
import { today, completedDecks } from '@/data/mockData'
import { ref } from 'vue'

const isLoading = ref(false)

function openLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<style scoped>
.carousel-section {
  display: flex;
  flex-direction: column;
}
</style>
