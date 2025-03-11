<template>
  <div class="loading-overlay">
    <div class="loading-animation">
      <img
        src="@/assets/icons/loading-screen/loading-text-up.png"
        alt="Circular Loading"
        class="circular-loading"
      />
      <img
        src="@/assets/icons/loading-screen/head-north.png"
        alt="Migaku Head"
        class="migaku-head"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-animation {
  position: relative;
  width: 233px;
  height: 230px;
}

/* Circular loading text rotates continuously clockwise */
.circular-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 233px;
  height: 230px;
  /* Animate clockwise rotation */
  animation: rotateAntiClockwise 3s linear infinite;
}

/* Migaku head positioned in the center rotates anticlockwise */
.migaku-head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 233px;
  height: 230px;
  /* Animate anticlockwise rotation */
  animation: rotateClockwise 3s linear infinite;
}

/* Keyframes for clockwise rotation (for the head) */
@keyframes rotateClockwise {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Keyframes for anticlockwise rotation (for the loading text) */
@keyframes rotateAntiClockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
