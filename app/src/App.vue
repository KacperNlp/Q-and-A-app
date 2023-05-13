<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { usePostsStore } from "@/store/postsStore";
import getPosts from "@/services/getPosts";

const store = usePostsStore();

onBeforeMount(async () => {
  const posts = await getPosts();
  store.setPosts(posts);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #261b36;
}
</style>
