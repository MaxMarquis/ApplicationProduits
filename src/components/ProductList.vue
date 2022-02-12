<template>
  <div>
    <product
      v-for="product in products"
      :product="product"
      :key="product.id"
    ></product>
  </div>
</template>
<script>
import product from "./Product.vue";

export default {
  name: "ProductList",
  components: {
    product,
  },
  props: { products: Array },
  data() {
    return {};
  },
};
</script>