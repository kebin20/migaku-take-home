<template>
  <div class="status-label" :class="`status-${status}`">
    <p>{{ statusText }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type StatusType = 'inReview' | 'paused' | 'completed'

const { status, noOfReviews } = defineProps<{
  status: StatusType
  noOfReviews?: number
}>()

const statusText = computed(() => {
  const statusMap = {
    inReview: `${noOfReviews} reviews`,
    paused: 'Paused',
    completed: 'Completed',
  }

  return statusMap[status] || ''
})
</script>

<style scoped>
.status-label {
  font-family: 'GT Maru', sans-serif;
  font-size: var(--label-font-size);
  font-weight: bold;
  border-radius: 62px;
  padding: 2px 10px;
  text-align: center;
}

.status-inReview {
  background-color: var(--color-status-label);
  color: var(--color-white);
}

.status-paused {
  background-color: var(--color--status-label-paused-magnolia);
  color: var(--color-text);
}

.status-completed {
  background-color: var(--color-status-label-completed);
  color: var(--color-status-label-completed-text);
}
</style>
