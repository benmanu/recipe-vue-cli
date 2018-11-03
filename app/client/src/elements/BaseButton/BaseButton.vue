<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
  },
};
</script>

<style scoped lang="less">
</style>
