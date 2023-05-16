<template>
  <DashboardLayout>
    <template v-slot:content>
      <AppCard v-for="post in store.getAllPosts" :key="post.key">
        <div class="post-card">
          <p class="post-card-category">
            Category:
            <app-category-box :categoryName="post.category"></app-category-box>
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
  }

  &-headlie {
    margin-bottom: 16px;
  }

  &-description {
    margin-bottom: 36px;
    font-size: 14px;
    line-height: 130%;
  }
}
</style>
