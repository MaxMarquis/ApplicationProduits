<template>
  <div class="card">
    <h1>{{ product.title }}</h1>
    <p class="project">{{ product.category }}</p>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    product: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 1px solid black;
  margin: 0.5rem auto;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  background-color: #42b983;
  color: white;
}
</style>
