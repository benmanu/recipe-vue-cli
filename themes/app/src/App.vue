<script>
/**
 * Main Vue app component.
 * Renders an `inline-template` allowing components to be rendered
 * through the SilverStripe templates.
 * Used to map global handlers etc.
 */

import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState('nav', {
      isMainNavOpen: state => state.isMainNavOpen,
      mainNavItems: state => state.mainNavItems,
    }),
  },
  methods: {
    ...mapActions('nav', [
      'toggleMainNav',
    ]),
  },
};
</script>
