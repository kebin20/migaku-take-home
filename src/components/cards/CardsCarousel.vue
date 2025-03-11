<template>
  <div class="cards-carousel-c">
    <h1
      class="title"
      :style="{ fontSize: isToday ? 'var(--title-font-size)' : 'var(--subtitle-font-size)' }"
    >
      {{ title }}
    </h1>
    <swiper :slides-per-view="2" space-between="0" class="carousel">
      <swiper-slide v-for="card in cards" :key="card.id">
        <CardItem
          :imageSrc="card.src"
          :description="card.description"
          :backgroundImageStyle="card.backgroundImageStyle"
          :status="card.status"
          :noOfReviews="card.noOfReviews"
          :textColor="card.textColor"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

interface Card {
  textColor?: string
  id: number
  src: string
  backgroundImageStyle: string
  description: string
  status: string
  noOfReviews: number | string
}

const { title, isToday, cards } = defineProps<{
  title: string
  isToday: boolean
  cards: Card[]
}>()
</script>

<style scoped>
.cards-carousel-c {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

.carousel {
  width: 86%;
  height: 205px;
}
</style>
