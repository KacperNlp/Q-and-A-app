<template>
  <span class="app-category-box" :class="categoryName">{{ categoryName }}</span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCategoryBox",

  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.app-category-box {
  display: inline-block;
  margin-left: 5px;
  padding: 5px 10px;
  border: 1px solid #fff;
  font-weight: 600;
  font-style: italic;

  &.javascript {
    color: yellow;
  }

  &.php {
    color: rgb(209, 129, 209);
  }
}
</style>
