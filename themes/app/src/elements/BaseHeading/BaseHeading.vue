<template>
  <div>
    <h1 v-if="size === 1">{{ heading }}</h1>
    <h2 v-else-if="size === 2">{{ heading }}</h2>
    <h3 v-else-if="size === 3">{{ heading }}</h3>
    <h4 v-else-if="size === 4">{{ heading }}</h4>
    <h5 v-else-if="size === 5">{{ heading }}</h5>
    <h6 v-else-if="size === 6">{{ heading }}</h6>
  </div>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    heading: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 1,
      validator(value) {
        return [1, 2, 3, 4, 5, 6].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style lang="less">
</style>
