<template>
  <div class="status-label" :style="statusStyle">
    <p>{{ statusText }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  status: String,
  noOfReviews: Number,
})

const statusText = computed(() => {
  if (props.status === 'inReview') {
    return `${props.noOfReviews} reviews`
  } else if (props.status === 'paused') {
    return 'Paused'
  } else if (props.status === 'completed') {
    return 'Completed'
  }
  return ''
})

const statusStyle = computed(() => {
  if (props.status === 'inReview') {
    return {
      backgroundColor: 'var(--color-status-label)',
      color: 'var(--color-white)',
    }
  } else if (props.status === 'paused') {
    return {
      backgroundColor: 'var( --color--status-label-paused-magnolia)',
    }
  } else if (props.status === 'completed') {
    return {
      backgroundColor: 'var(--color-status-label-completed)',
      color: 'var(--color-status-label-completed-text)',
    }
  }
  return {}
})
</script>

<style scoped>
.status-label {
  font-family: 'GT Maru', sans-serif;
  font-size: var(--label-font-size);
  background-color: gray;
  border-radius: 62px;
  padding: 2px 10px;
  text-align: center;
}
</style>
