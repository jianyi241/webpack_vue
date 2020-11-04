<template>
  <div>Hello {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Webpack + Vue",
    };
  },
};
</script>

<style scoped>
div {
  color: #3399ff;
  font-size: 18px;
}
</style>