<template>
  <div class="tiles">
    <div v-for="(tile, index) in tiles" :key="index" class="tiles__tile">
      <p>Tile {{ index + 1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tiles',
  props: {
    tiles: {
      type: Array,
      default: () => Array(7),
    },
  },
};
</script>

<style scoped lang="less">
@tiles-gutter: @gutter-base;
@tiles-tile-background-color: @color-grey;
@tiles-tile-color: #fff;

.tiles {
  max-width: 50%;
  display: grid;
  grid-gap: @tiles-gutter;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.tiles__tile {
  background-color: @tiles-tile-background-color;
  color: @tiles-tile-color;
  border-radius: 5px;
  padding: 20px;

  // grid fallback
  float: left;
  width: 50%;
  min-width: 240px;
}

@supports (display: grid) {
  .tiles__tile {
    width: auto;
    min-width: auto;
  }
}
</style>
