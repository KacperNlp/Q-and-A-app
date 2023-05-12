<template>
  <DashboardLayout>
    <template v-slot:content>
      <AppCard v-for="post in posts" :key="post.key">
        <div class="post-card">
          <h3 class="post-card-headlie">{{ post.title }}</h3>
          <p class="post-card-description">{{ post.description }}</p>
          <router-link :to="`/post/${post.id}`" class="post-card-link"
            >Check Question</router-link
          >
        </div>
      </AppCard>
    </template>
  </DashboardLayout>
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
<style lang="scss">
.post-card {
  &-headlie {
    margin-bottom: 10px;
  }

  &-description {
    margin-bottom: 10px;
  }

  &-link {
    color: #fff;
  }
}
</style>
