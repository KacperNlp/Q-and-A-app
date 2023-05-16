<template>
  <div class="question-page">
    <NavigationLayout></NavigationLayout>
    <div class="question-page-content">
      <main class="question-page-main">
        <app-card :toLeft="true" :isBrighterBg="true">
          <slot name="question-container"></slot>
        </app-card>
        <app-card class="answers-container">
          <slot name="answers-container"></slot>
        </app-card>
      </main>
      <sidebar class="question-page-sidebar">
        <h1>sidebar section</h1>
      </sidebar>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionPageLayout",
});
</script>

<style lang="scss">
.question {
  &-page {
    &-content {
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: 90%;
      max-width: 1150px;
      margin: 100px auto;

      @media (min-width: 768px) {
        flex-direction: row;
        gap: 50px;
      }

      @media (min-width: 1280px) {
        gap: 100px;
      }
    }

    &-main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    &-sidebar {
      width: 100%;
      background: red;

      @media (min-width: 768px) {
        width: 250px;
      }
    }
  }
}
</style>
