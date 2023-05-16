<template>
  <div
    class="card"
    :class="{ center: toCenter, 'bright-background': isBrighterBg }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCard",

  props: {
    toCenter: {
      type: Boolean,
      required: false,
    },
    isBrighterBg: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 10px;
  background: #372949;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: left;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }

  @media (min-width: 1280px) {
    padding: 40px;
  }

  &.center {
    text-align: center;
  }

  &.bright-background {
    background: lighten($color: #372949, $amount: 7);
  }
}
</style>
