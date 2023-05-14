<template>
  <DashboardLayout>
    <template v-slot:content>
      <AppCard v-for="post in store.getAllPosts" :key="post.key">
        <div class="post-card">
          <h3 class="post-card-headlie">{{ post.title }}</h3>
          <p class="post-card-description">{{ post.description }}</p>
          <app-link-btn
            text="Read more"
            :link="`/post/${post.id}`"
          ></app-link-btn>
        </div>
      </AppCard>
    </template>
  </DashboardLayout>
</template>
<script setup>
import { usePostsStore } from "@/store/postsStore";

const store = usePostsStore();
</script>
<style lang="scss">
.post-card {
  &-headlie {
    margin-bottom: 10px;
  }

  &-description {
    margin-bottom: 10px;
  }
}
</style>
