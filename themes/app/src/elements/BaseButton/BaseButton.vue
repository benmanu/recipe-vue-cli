<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: String,
  },
};
</script>

<style scoped lang="less">
</style>
