<template>
  <div class="hero-section">
    <img src="@\assets\icons\planets-a.png" alt="Image 1" class="image purple-planet" />
    <img src="@\assets\icons\planets-b.png" alt="Image 2" class="image comet" />
    <img src="@\assets\icons\migaku-heart.png" alt="Image 3" class="image migaku-heart" />
    <img src="@\assets\icons\planets-d.png" alt="Image 5" class="image planets" />
    <img src="@\assets\icons\planets-c.png" alt="Image 4" class="image earth" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100px;
}

.image {
  position: absolute;
}

.purple-planet {
  width: 46%;
  top: -63%;
  left: 3%;
  z-index: -1;
}

.comet {
  width: 14%;
  top: -64%;
  left: 66%;
}

.migaku-heart {
  z-index: 1;
  width: 169px;
  top: -10%;
  left: 27%;
}

.earth {
  width: 31%;
  top: 96%;
  left: 4%;
}

.planets {
  top: 29%;
  left: 53%;
  width: 43%;
}
</style>
