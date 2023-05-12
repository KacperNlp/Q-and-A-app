<template>
  <div>Home</div>
</template>
<script>
import getPosts from "@/services/getPosts";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
    };
  },

  async beforeMount() {
    this.posts = await getPosts();
  },
};
</script>
<style lang="scss"></style>
