<template>
  <div class="container">
    <p>Copyright © {{ date.getFullYear() }}</p>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>
<style scoped>
.container {
  margin-top: 1rem;
  background-color: darkgray;
}
</style>