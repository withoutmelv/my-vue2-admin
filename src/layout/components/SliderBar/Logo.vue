<template>
  <div class="flex flex-align-center logo_box">
    <div class="logo"></div>
    <h1 class="pl_20 c_fff font-size-14">my-vue2-admin</h1>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss" scoped>
.logo_box {
  width: 230px;
  padding: 10px 20px;
  background-color: #438afe;
  .logo {
    min-width: 30px;
    height: 30px;
    background: url("../../../assets/img/logo/logo.png");
    background-size: 100% 100%;
  }
}
</style>
