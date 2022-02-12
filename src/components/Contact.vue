<template>
  <h1>Formulaire de contact</h1>
  <div class="container">
    <form>
      <label for="nom">Nom</label>
      <input
        type="text"
        id="nom"
        v-model="contactData.lastName"
        placeholder="John"
      />
      <label for="prenom">Prénom</label>
      <input
        type="text"
        id="prenom"
        v-model="contactData.firstName"
        placeholder="Doe"
      />
      <label for="courriel">Courriel</label>
      <input
        type="text"
        id="courriel"
        v-model="contactData.email"
        placeholder="example@email.com"
      />

      <select v-model="contactData.category">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="{ title: category.title }"
        >
          {{ category.title }}
        </option>
      </select>

      <input type="submit" value="Submit" @click="validation" />
    </form>
    <p>{{ errors }}</p>
  </div>
</template>
<script>
export default {
  name: "Contact",
  props: { categories: Array, getProduct: Function, products: Array },
  data() {
    return {
      errors: "",
      contactData: {
        firstName: "",
        lastName: "",
        email: "",
        category: this.categories[0],
      },
    };
  },
  methods: {
    validation: function () {
      if (
        this.contactData.lastName &&
        this.contactData.firstName &&
        this.contactData.email
      ) {
        const emailVal = new RegExp(
          "^[a-zA-Z0-9-.]{1,}@([a-zA-Z.])?[a-zA-Z]{1,}.[a-zA-Z]{2,3}$"
        );
        if (emailVal.test(this.contactData.email)) {
          this.errors = "";
          // this.contactData.push(this.contactData);
          console.log(this.contactData);
          alert("Le message a été envoyer");
        } else {
          this.errors = "L'adresse courriel n'est pas valide";
        }
      } else {
        this.errors = "Tous les champs sont obligatoires";
      }
    },
  },
};
</script>
<style scoped>
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: 1rem;
}

h1 {
  margin-top: 1rem;
}
</style>