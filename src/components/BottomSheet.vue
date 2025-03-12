<template>
  <transition name="overlay-transition">
    <div class="overlay" v-if="show" @click="closeBottomSheet"></div>
  </transition>
  <transition name="sheet-transition">
    <div class="bottom-sheet" v-if="show" ref="bottomSheetRef">
      <div class="handle" @click="closeBottomSheet"></div>
      <CardItem
        :backgroundImageStyle="initialDeck.backgroundImageStyle"
        :description="initialDeck.description"
        :noOfReviews="initialDeck.noOfReviews"
        :status="initialDeck.status"
        :imageSrc="initialDeck.imageSrc"
        :textColor="initialDeck.textColor"
      />
      <p>You learned {{ initialDeck.learntWords }} words today</p>
      <StudyPrimaryButton :noOfCards="initialDeck.learntWords" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, toRefs, defineEmits, PropType } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  initialDeck: {
    type: Object as PropType<CardItemProps>,
  },
})

const bottomSheetRef = ref(null)
const show = ref(false)

const emit = defineEmits(['close'])

const { initialDeck } = toRefs(props)

function closeBottomSheet() {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 200)
}

onMounted(() => {
  nextTick(() => {
    show.value = true
    if (bottomSheetRef.value) {
      onClickOutside(bottomSheetRef.value, closeBottomSheet)
    }
  })
})
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  z-index: 9999;
}

.bottom-sheet {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: var(--color-white);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  width: 100%;
  height: 292px;
  padding: 12px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
}

.handle {
  width: 40px;
  height: 5px;
  border-radius: 6px;
  background-color: #00005a59;
  margin: 0 auto;
}

p {
  text-align: center;
}

.sheet-transition-enter-active,
.sheet-transition-leave-active {
  transition: transform 0.2s ease-out;
}

.sheet-transition-enter-from,
.sheet-transition-leave-to {
  transform: translateY(100%) translateX(-50%);
}

.overlay-transition-enter-active,
.overlay-transition-leave-active {
  transition: opacity 0.2s ease;
}

.overlay-transition-enter-from,
.overlay-transition-leave-to {
  opacity: 0;
}
</style>
