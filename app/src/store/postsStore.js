import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),

  getters: {
    getAllPosts: (state) => state.posts,
  },

  actions: {
    setPosts(posts) {
      this.posts = posts;
    },
  },
});
