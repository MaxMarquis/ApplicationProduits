<template>
  <div class="container">
    <h1>Ajouter un produit</h1>
    <form>
      <select v-model="newProduct.category">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="{ title: category.title }"
        >
          {{ category.title }}
        </option>
      </select>
      <input
        v-model="newProduct.title"
        placeholder="Nom du produit"
        @keyup.enter="validation"
      />
      <input type="submit" value="ajouter" @click="validation" />
      <br />
      <p v-for="error in errors" :key="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "ProductEdit",
  props: { categories: Array, getProduct: Function },
  data() {
    return {
      errors: [],
      newProduct: {
        title: "",
        category: "",
      },
    };
  },
  methods: {
    // Valide le formulaire du newProdut
    validation: function () {
      let regex = new RegExp("^[a-zA-Z ]{3,50}$");
      this.errors = [];
      if (!this.newProduct.category) {
        return this.errors.push("Vous devez sélectionner une catégorie.");
      }
      if (regex.test(this.newProduct.title)) {
        this.getProduct(this.newProduct);
        alert(
          `Ajout du produit ${this.newProduct.title} dans la ${this.newProduct.category.title}`
        );
        this.newProduct = {};
      } else {
        alert(
          "Le titre du produit doit contenir minimum 3 et maximum 50 caractères"
        );
      }
    },
  },
};
</script>
<style scoped>
.error {
  color: red;
}
.container {
  margin-top: 1rem;
}
form {
  margin-top: 1rem;
}
</style>