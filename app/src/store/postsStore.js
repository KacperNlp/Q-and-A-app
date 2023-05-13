import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),

  getters: {
    getAllPosts: (state) => state.posts,
    getVisitedPost: (state) => {
      return (postId) => {
        return state.posts.find((post) => post.id === Number(postId));
      };
    },
  },

  actions: {
    setPosts(posts) {
      this.posts = posts;
    },
  },
});
