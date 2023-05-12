<template>
  <header>
    <nav class="nav">
      <router-link to="/" class="nav-link">Dashboard</router-link>
      <router-link to="/about" class="nav-link">Go to About</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavigationLayout",
};
</script>
<style lang="scss">
.nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #372949;
  -webkit-box-shadow: 0px 91px 60px -41px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 91px 60px -41px rgba(66, 68, 90, 1);
  box-shadow: 0px 91px 60px -41px rgba(66, 68, 90, 1);

  @media (min-width: 768px) {
    padding: 30px;
    gap: 30px;
  }

  &-link {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #a4d0a4;
    }

    &.router-link-active {
      color: #a4d0a4;
    }
  }
}
</style>
