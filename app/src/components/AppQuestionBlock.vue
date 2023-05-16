<template>
  <div class="app-question-block">
    <div class="app-question-block-content">
      <p class="app-question-block-content-category">
        Category:
        <app-category-box :categoryName="category"></app-category-box>
      </p>
      <h1 class="app-question-block-content-headline">{{ title }}</h1>
      <p class="app-question-block-content-main">{{ content }}</p>
    </div>
    <app-user-block :nick="authorNickname" :userId="authorId"></app-user-block>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppQuestionBlock",

  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    authorNickname() {
      return "Adam";
    },

    authorId() {
      return "12ad";
    },
  },
});
</script>

<style lang="scss">
.app-question-block {
  &-content {
    &-category {
      margin-bottom: 16px;
      font-size: 12px;
    }

    &-headline {
      margin-bottom: 10px;
    }

    &-main {
      margin-bottom: 36px;
      font-size: 14px;
      line-height: 140%;
    }
  }
}
</style>
