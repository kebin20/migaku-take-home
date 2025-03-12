<template>
  <div class="app-container">
    <header class="fixed-header">
      <ProgressNavBar @open-loading="openLoading" />
    </header>

    <main class="scrollable-content">
      <div class="content-wrapper">
        <MigakuHeroSection />
        <div class="carousel-section">
          <CardsCarousel title="Today" :cards="today" isToday @cardClicked="openBottomSheet" />
          <CardsCarousel title="Completed" :cards="completedDecks" @cardClicked="openBottomSheet" />
        </div>
      </div>
    </main>

    <footer class="fixed-footer">
      <BottomNavBar />
    </footer>

    <LoadingScreen v-if="isLoading" />
    <BottomSheet
      v-if="isBottomSheetVisible"
      :initialDeck="completedDecks[0]"
      @close="isBottomSheetVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { today, completedDecks } from '@/data/mockData'
import type { Deck } from '@/types/interfaces.ts'
import { ref } from 'vue'

const isLoading = ref(false)
const isBottomSheetVisible = ref(false)

const openBottomSheet = (deck: Deck) => {
  if (deck === completedDecks[0]) {
    isBottomSheetVisible.value = true
  }
}

const openLoading = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<style scoped>
.app-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.fixed-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
}

.fixed-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: transparent;
}

.scrollable-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.content-wrapper {
  padding-top: 175px;
  padding-bottom: 130px;
  min-height: 100%;
}

.carousel-section {
  display: flex;
  flex-direction: column;
}
</style>
