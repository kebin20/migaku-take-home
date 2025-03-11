<template>
  <div class="progress-nav-bar">
    <button class="profile-button" @click="handleProfileClick">
      <img src="@/assets/icons/profile-button.png" alt="Profile Button" class="profile-img" />
    </button>
    <div class="progress-bar" @click="toggleProgress">
      <div class="progress-wrapper">
        <img src="@/assets/icons/status-bar.png" alt="Blank Progress" class="squiggly-bg" />
        <div class="progress-fill" :style="{ width: progressPercent + '%' }">
          <img
            src="@/assets/icons/status-bar-full.png"
            alt="Filled Progress"
            class="squiggly-fill"
          />
        </div>
      </div>
      <span class="progress-text">{{ progressPercent }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['open-loading'])

const progressPercent = ref(0)

function handleProfileClick() {
  emit('open-loading')
}

function toggleProgress() {
  progressPercent.value = progressPercent.value === 0 ? 100 : 0
}
</script>

<style scoped>
.progress-nav-bar {
  display: flex;
  align-items: center;
  gap: 1.4em;
  padding: 49px 25px;
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
  gap: 1em;
  cursor: pointer;
}

.progress-wrapper {
  position: relative;
  width: 105px;
  height: auto;
}

.squiggly-bg {
  display: block;
  width: 100%;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  overflow: hidden;
  transition: width 0.5s ease;
}

.squiggly-fill {
  display: block;
  width: 100%;
}

.progress-text {
  font-weight: bold;
}
</style>
