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
        <BaseCard>
          <CardItem
            :imageSrc="card.imageSrc"
            :description="card.description"
            :backgroundImageStyle="card.backgroundImageStyle"
            :status="card.status"
            :noOfReviews="card.noOfReviews"
            :textColor="card.textColor"
            @cardClicked="handleCardClick(card)"
          />
        </BaseCard>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { defineEmits } from 'vue'
import { Card } from '@/types/interfaces'

const { title, isToday, cards } = defineProps<{
  title: string
  isToday?: boolean
  cards: Card[]
}>()

const emit = defineEmits(['cardClicked'])

function handleCardClick(card) {
  emit('cardClicked', card)
}
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
