<template>
  <div class="cards-carousel-c">
    <h1
      class="title"
      :style="{ fontSize: isToday ? 'var(--title-font-size)' : 'var(--subtitle-font-size)' }"
    >
      {{ title }}
    </h1>
    <div class="carousel">
      <CardItem
        imageSrc="src\assets\icons\saxophone.png"
        description="test"
        backgroundImageStyle="background-color: var(--color-saxophone)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  titleClass: string
  description: string
  isToday: boolean
}>()
</script>

<style scoped>
.cards-carousel-c {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

.carousel {
  display: flex;
  gap: 1em;
}
</style>
