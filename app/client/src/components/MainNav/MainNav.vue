<template>
  <nav class="nav" :class="{ 'nav__open': isOpen }">
    <ul>
      <li v-for="item in items" :key="item.id" class="nav__item">
        <a :href="item.url" class="nav__link" :class="{ 'nav__link--active': item.isActive }">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="less">
.nav {
  display: none;

  &.nav__open {
    display: block;
  }
}

.nav__item {
}

.nav__link {
  &.nav__link--active {
    font-weight: 700;
  }
}
</style>
