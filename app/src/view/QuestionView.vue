<template>
  <div v-if="isPostLoaded">
    <h1>Hello there {{ post.title }}!</h1>
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
