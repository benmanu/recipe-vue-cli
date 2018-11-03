<template>
  <article v-html="content"></article>
</template>

<script>
export default {
  name: 'BaseContent',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less">
</style>
