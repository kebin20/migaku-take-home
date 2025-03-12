<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseCard',
}
</script>

<style scoped>
.base-card {
  background-color: var(--color-white);
  border-radius: 16px;
  padding: 16px;
  box-shadow:
    0px 0.25px 0.55px 0px #00005a00,
    0px 0.6px 1.33px 0px #00005a02,
    0px 1.13px 2.5px 0px #00005a07,
    0px 2.01px 4.47px 0px #00005a0d,
    0px 3.76px 8.36px 0px #00005a15,
    0px 9px 20px 0px #00005a24;
  width: 152px;
  height: 180px;
  transition: transform 0.1s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.base-card:active {
  transform: scale(0.95);
}
</style>
