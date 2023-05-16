<template>
  <DashboardLayout>
    <template v-slot:content>
      <AppCard v-for="post in store.getAllPosts" :key="post.key">
        <div class="post-card">
          <p class="post-card-category">
            Category:
            <span class="post-card-category-box">{{ post.category }}</span>
          </p>
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
  &-category {
    margin-bottom: 10px;
    font-size: 12px;

    &-box {
      display: inline-block;
      margin-left: 5px;
      padding: 5px 10px;
      border: 1px solid #fff;
    }
  }

  &-headlie {
    margin-bottom: 16px;
  }

  &-description {
    margin-bottom: 36px;
  }
}
</style>
