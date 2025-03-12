<template>
  <div class="progress-nav-bar">
    <button class="profile-button" @click="handleProfileClick">
      <img src="@/assets/icons/profile-button.png" alt="Profile Button" class="profile-img" />
    </button>
    <div class="progress-bar" @click="toggleProgress">
      <div class="progress-wrapper">
        <ProgressBarIcon :fillPercentage="progressPercent" />
      </div>
      <span class="progress-text">{{ progressPercent }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBarIcon from '@/assets/icons/ProgressBarIcon.vue'
import { ref } from 'vue'

const emit = defineEmits(['open-loading'])
const progressPercent = ref(0)

const handleProfileClick = () => {
  emit('open-loading')
}

const toggleProgress = () => {
  progressPercent.value = progressPercent.value === 0 ? 100 : 0
}
</script>

<style scoped>
.progress-nav-bar {
  display: flex;
  align-items: center;
  gap: 1.4em;
  padding: 34px 25px;
  z-index: 9999;
}

.profile-button {
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile-img {
  height: 40px;
  width: 40px;
}

.progress-bar {
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  background: var(--color-white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2em;
  padding: 1em;
  gap: 9px;
  cursor: pointer;
}

.progress-wrapper {
  position: relative;
  width: 105px;
  height: auto;
}

.progress-text {
  font-weight: bold;
}
</style>
