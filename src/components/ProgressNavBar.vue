<template>
  <div class="progress-nav-bar">
    <button class="profile-button">
      <img
        src="C:\Users\ktanz\webprojects\migaku-ui-test\src\assets\icons\profile-button.png"
        alt="Profile Button"
        class="profile-img"
      />
    </button>
    <div class="progress-bar">
      <img :src="imageSrc" alt="Progress" class="progress-image" />
      <span>{{ progressText }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  progressText: string
}>()
</script>

<style scoped>
.progress-nav-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
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
  background: var(--color-white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2em;
  display: flex;
  align-items: center;
  padding: 1em;
}

.progress-image {
  width: 105px;
  margin-right: 1em;
}
</style>
