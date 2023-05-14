<template>
  <div>
    <router-link :to="link" class="app-link-btn">
      {{ text }}
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppLinkBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.app-link-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #493f57;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #fff;
    color: #493f57;
  }
}
</style>
