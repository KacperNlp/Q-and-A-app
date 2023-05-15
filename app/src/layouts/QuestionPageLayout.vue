<template>
  <div class="question-page">
    <NavigationLayout></NavigationLayout>
    <div class="question-container">
      <slot name="question-container"></slot>
    </div>
    <div class="answers-container">
      <slot name="answers-container"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionPageLayout",
});
</script>

<style lang="scss"></style>
