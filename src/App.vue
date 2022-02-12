<template>
  <my-header />
  <div class="wrapper">
    <router-view
      :getProduct="getProduct"
      :products="products"
      :categories="categories"
    />
  </div>
  <my-footer />
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      categories: [
        { title: "Category A" },
        { title: "Category B" },
        { title: "Category C" },
      ],
      products: [
        {
          id: 1,
          title: "Product A",
          category: "Category A",
        },
        {
          id: 2,
          title: "Product B",
          category: "Category B",
        },
        {
          id: 3,
          title: "Product C",
          category: "Category C",
        },
        {
          id: 4,
          title: "Product D",
          category: "Category C",
        },
      ],
    };
  },
  methods: {
    // Va chercher le produit créé dans ProductEdit et l'envoie dans l'objet products avec la méthode push
    getProduct(newProduct) {
      console.log(newProduct);
      this.products.push({
        id: Math.floor(Math.random() * 10),
        title: newProduct.title,
        category: newProduct.category.title,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
}
.wrapper {
  min-height: 100%;
}
</style>
