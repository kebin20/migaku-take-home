<script setup lang="ts">
import { today, completedDecks } from '@/data/mockData'
</script>

<template>
  <header>
    <ProgressNavBar imageSrc="src/assets/icons/status-bar.png" progressText="0" />
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
</template>

<style scoped>
.carousel-section {
  display: flex;
  flex-direction: column;
}
</style>
