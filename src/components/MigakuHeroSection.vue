<template>
  <div class="hero-section">
    <img src="@\assets\icons\hero\planets-a.png" alt="Image 1" class="image purple-planet" />
    <img src="@\assets\icons\hero\planets-b.png" alt="Image 2" class="image comet" />
    <img src="@\assets\icons\hero\migaku-heart.png" alt="Image 3" class="image migaku-heart" />
    <img src="@\assets\icons\hero\planets-d.png" alt="Image 5" class="image planets" />
    <img src="@\assets\icons\hero\planets-c.png" alt="Image 4" class="image earth" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 150px;
  z-index: -1;
}

.image {
  position: absolute;
}

.purple-planet {
  width: 47%;
  top: -43%;
  left: 3%;
  z-index: -1;
}

.comet {
  width: 14%;
  top: -43%;
  left: 66%;
}

.migaku-heart {
  z-index: 1;
  width: 169px;
  top: -10%;
  left: 27%;
}

.earth {
  width: 27%;
  top: 46%;
  left: 2%;
}

.planets {
  top: 23%;
  left: 60%;
  width: 33%;
}
</style>
