<template>
  <div class="card-item" @click="handleClick">
    <div class="card-image" :style="{ backgroundColor: backgroundImageStyleComputed }">
      <img
        v-if="status === 'completed'"
        src="@/assets/icons/checkmark.png"
        alt="Checkmark"
        class="checkmark"
      />
      <img v-if="imageSrc" :src="imageSrc" alt="Card Image" class="icon" />
      <p v-else class="capital-letter" :style="{ color: textColor }">
        {{ capitalizedFirstLetter }}
      </p>
    </div>
    <p class="topic-title">{{ description }}</p>
    <StatusLabel :noOfReviews="noOfReviews" :status="status" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineEmits } from 'vue'
import { Deck } from '@/types/interfaces.ts'

const props = defineProps<Deck>()
const emit = defineEmits(['cardClicked'])

const backgroundImageStyleComputed = computed(() => props.backgroundImageStyle || '#f0f0f0')

const capitalizedFirstLetter = computed(() => {
  if (!props.description) return ''
  return props.description.charAt(0).toUpperCase()
})

function handleClick() {
  emit('cardClicked')
}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.card-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f0f0;
}

.icon {
  width: 33px;
  height: 33px;
}

.checkmark {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
}

.topic-title {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 125px;
}

.capital-letter {
  font-size: var(--letter-icon-font-size);
  font-weight: bold;
}
</style>
