<template>
  <svg width="112" height="12" viewBox="0 0 112 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_108_10952"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="112"
      height="12"
    >
      <path
        d="M108.548 8.01323L103.55 4.63703C101.232 3.07086 98.1444 3.28607 96.0655 5.15875L94.7354 6.35696C92.4188 8.44385 88.9001 8.44385 86.5834 6.35696L85.7909 5.64301C83.4742 3.55612 79.9555 3.55612 77.6389 5.64301L76.8463 6.35696C74.5297 8.44385 71.011 8.44385 68.6944 6.35696L67.9018 5.64301C65.5852 3.55611 62.0665 3.55611 59.7499 5.64301L58.9573 6.35696C56.6407 8.44385 53.122 8.44385 50.8053 6.35696L50.0128 5.64301C47.6961 3.55611 44.1774 3.55611 41.8608 5.64301L41.0682 6.35696C38.7516 8.44385 35.2329 8.44385 32.9163 6.35696L32.1237 5.64301C29.8071 3.55611 26.2884 3.55612 23.9717 5.64301L23.1792 6.35696C20.8626 8.44385 17.3439 8.44385 15.0272 6.35696L14.2347 5.64301C11.918 3.55611 8.39934 3.55611 6.0827 5.64301L3.45154 8.01323"
        stroke="black"
        stroke-width="6.08989"
        stroke-linecap="round"
      />
    </mask>
    <g mask="url(#mask0_108_10952)">
      <rect x="-25.6196" y="-1.07391" width="286.225" height="14.1473" fill="#EDE3FF" />
      <rect
        x="-27.5485"
        y="-1.02875"
        :width="`${fillPercentage * 1.38}`"
        height="14"
        fill="url(#paint0_linear_108_10952)"
        style="transition: width 0.5s ease"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_108_10952"
        x1="42.4515"
        y1="0.915697"
        x2="42.4515"
        y2="12.0268"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF9345" />
        <stop offset="1" stop-color="#FE4670" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  fillPercentage: {
    type: Number,
    default: 0,
  },
})
</script>
