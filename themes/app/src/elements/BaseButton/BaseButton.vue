<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="less">
</style>
