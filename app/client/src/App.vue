<template>
  <div>
    <header>
      <BaseButton text="Toggle Nav" :on-click="toggleMainNav" />
      <MainNav :is-open="isMainNavOpen" :items="mainNavItems" />
    </header>
    <main>
      <h1>App</h1>
      <BaseContent v-if="content" :content="content" />
      <Tiles />
    </main>
    <footer></footer>
  </div>
</template>

<script>
/**
 * Main Vue app component.
 * Renders out the child components, and provides some global styles.
 */

import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      isMainNavOpen: state => state.isMainNavOpen,
      mainNavItems: state => state.mainNavItems,
    }),
    ...mapState('content', {
      content: state => state.content,
    }),
  },
  methods: {
    ...mapActions([
      'toggleMainNav',
    ]),
  },
};
</script>

<style lang="less">
@import "utilities/reset.less";

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
