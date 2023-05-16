<template>
  <div v-if="isPostLoaded">
    <question-page-layout>
      <template #question-container>
        <app-question-block
          :title="title"
          :content="content"
          :category="category"
        ></app-question-block>
      </template>
      <template #answers-container>
        <h2>Answer</h2>
      </template>
    </question-page-layout>
  </div>
</template>
<script>
import { ref, onBeforeMount, computed, defineComponent } from "vue";
import { usePostsStore } from "@/store/postsStore";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "QuestionView",
  setup: () => {
    const post = ref({
      title: undefined,
      description: undefined,
    });

    const route = useRoute();
    const store = usePostsStore();

    //computed
    const isPostLoaded = computed(() => post.value.title !== undefined);
    const title = computed(() => post.value.title);
    const content = computed(() => post.value.description);
    const category = computed(() => post.value.category);

    onBeforeMount(() => {
      post.value = store.getVisitedPost(route.params.id);
    });

    return { post, isPostLoaded, title, content, category };
  },
});
</script>
<style lang="scss"></style>
