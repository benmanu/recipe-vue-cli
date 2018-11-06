<template>
  <article>
    <v-base-heading v-if="heading" :heading="heading"></v-base-heading>
    <div v-if="content" v-html="content"></div>
  </article>
</template>

<script>
export default {
  name: 'BaseContent',
  props: {
    heading: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less">
</style>
