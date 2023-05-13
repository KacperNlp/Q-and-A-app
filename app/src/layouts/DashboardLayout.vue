<template>
  <NavigationLayout></NavigationLayout>
  <main class="dashboard">
    <slot name="content"></slot>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardLayout",
});
</script>

<style lang="scss">
.dashboard {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  max-width: 1440px;
  margin: auto;
  padding: 30px 20px;

  @media (min-width: 768px) {
    grid-gap: 60px 50px;
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 20px;
  }
}
</style>
