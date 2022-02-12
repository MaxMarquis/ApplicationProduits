<template>
  <nav>
    <ul>
      <li><router-link to="/productlist">Produit Liste</router-link></li>
      <li><router-link to="/productedit">Produit Edit</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <!-- <li><a href="#">Produit</a></li>
      <li><a href="#">Produit Liste</a></li>
      <li><a href="#">Produit Edit</a></li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}
</style>