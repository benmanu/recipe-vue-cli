<template>
  <div>
    <header></header>
    <main>
      <h1>App</h1>
      <article>{{ content }}</article>
      <HelloWorld msg="Hello, world!" />
      <BaseButton />
    </main>
    <footer></footer>
  </div>
</template>

<script>
/**
 * Main Vue app component.
 * Renders out the child components, and provides some global styles.
 */

import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      content: state => state.content,
    }),
  },
};
</script>

<style lang="less">
// css reset
@import "utilities/reset.less";
</style>
