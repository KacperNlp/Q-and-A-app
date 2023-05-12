<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "AppCard",
};
</script>
<style lang="scss" scoped>
.card {
  padding: 20px 10px;
  background: #372949;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
}
</style>
