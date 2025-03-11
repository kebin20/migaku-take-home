<script setup lang="ts"></script>

<template>
  <header>
    <ProgressNavBar imageSrc="src\assets\icons\status-bar.png" progressText="0" />
  </header>
  <main>
    <MigakuHeroSection />
    <div class="carousel-section">
      <CardsCarousel title="Today" isToday/>
      <CardsCarousel title="Completed" />
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
  gap: 1.5em;
}
</style>
