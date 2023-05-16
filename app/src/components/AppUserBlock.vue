<template>
  <router-link :to="`/user/${userId}`" class="user-block">
    <img :src="userImg" :alt="nick" class="user-block-img" />
    <p class="user-block-nick">{{ nick }}</p>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppUserBlock",

  props: {
    nick: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userImg: {
      type: Object,
      required: false,
    },
  },
});
</script>

<style lang="scss">
.user-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 100px;

  &-nick {
    font-size: 14px;
    color: #fff;
  }
}
</style>
