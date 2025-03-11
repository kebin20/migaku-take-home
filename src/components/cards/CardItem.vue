<template>
  <BaseCard>
    <div class="card-item">
      <div class="card-image" :style="backgroundImageStyle">
        <img
          v-if="isComplete"
          src="@\assets\icons\checkmark.png"
          alt="Checkmark"
          class="checkmark"
        />
        <img :src="imageSrc" alt="Card Image" class="icon" />
      </div>
      <p class="topic-title">{{ description }}</p>
      <StatusLabel inReview noOfReviews="21" :status="{ status }" />
    </div>
  </BaseCard>
</template>

<script lang="ts">
export default {
  name: 'CardItem',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backgroundImageStyle: {
      type: String,
      required: false,
    },
    isComplete: {
      type: Boolean,
      required: false,
    },
  },
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
}
</style>
