<template>
  <div class="bottom-nav-bar">
    <button class="bottom-nav-bar-button">
      <img src="@\assets\icons\books.svg" alt="Book Icon" />
    </button>
    <button class="bottom-nav-bar-button">
      <img src="@\assets\icons\book-stack.svg" alt="Stack of Books Icon" />
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bottom-nav-bar {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 128px;
  height: 56px;
  background: var(--color-white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 2em;
  display: flex;
  align-items: center;
  padding: 1em 2em;
}

.bottom-nav-bar-button {
  background: none;
  border: none;
  cursor: pointer;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
