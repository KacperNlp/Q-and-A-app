<template>
  <router-link to="/" class="back-to-dashboard">Back to Dashboard</router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBackToHomeLink",
});
</script>

<style lang="scss">
.back-to-dashboard {
  color: orange;
}
</style>
