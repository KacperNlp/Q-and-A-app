<template>
  <div v-if="isPostLoaded">
    <question-page-layout>
      <template #question-container><h1>Question</h1></template>
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

    const isPostLoaded = computed(() => post.value.title !== undefined);

    onBeforeMount(() => {
      post.value = store.getVisitedPost(route.params.id);
    });

    return { post, isPostLoaded };
  },
});
</script>
<style lang="scss"></style>
