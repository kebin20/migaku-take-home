<template>
  <header>
    <ProgressNavBar @open-loading="openLoading" />
  </header>
  <main>
    <MigakuHeroSection />
    <div class="carousel-section">
      <CardsCarousel title="Today" :cards="today" isToday @cardClicked="openBottomSheet" />
      <CardsCarousel title="Completed" :cards="completedDecks" @cardClicked="openBottomSheet" />
    </div>
  </main>
  <footer>
    <BottomNavBar />
  </footer>
  <LoadingScreen v-if="isLoading" />
  <BottomSheet
    v-if="isBottomSheetVisible"
    :initialDeck="completedDecks[0]"
    @close="isBottomSheetVisible = false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { today, completedDecks } from '@/data/mockData'

const isLoading = ref(false)
const isBottomSheetVisible = ref(false)

function openBottomSheet(deck) {
  if (deck === completedDecks[0]) {
    isBottomSheetVisible.value = true
  }
}

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
