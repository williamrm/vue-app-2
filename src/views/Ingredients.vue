<template>
    <div class="app" id="main">
        <b-input-group size="md" id="search">
            <b-form-input v-model="researchedRecipe" placeholder="Search an ingredient"></b-form-input>
            <b-input-group-append>
                <b-button @click="getRecipe" size="md" text="Search" variant="success">Button</b-button>
            </b-input-group-append>
        </b-input-group>
        <ul v-if="recipe.length>0" id="ul">
            <li v-for="rec in recipe" :key="rec.idMeal">
                <b-card
                    v-bind:title=rec.strMeal
                    v-bind:img-src=rec.strMealThumb img-width="400rem" img-height="400rem"
                    img-left
                    style="max-width: 50rem; max-height: 100rem;"
                    id="card"
                >
                </b-card>
            </li>
            <span> Powered with Kevin JUGUIN and François-Pierre ROUSSEAU</span>
        </ul>
    </div>
    
</template>

<script>
const apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
export default{
    name: 'app',

    data() {
        return {
            recipe: {},
            researchedIngredient: '',
            idRecipe: '',
            ingredients: [],
            ingredientRecipe: '',
        }
    },

    methods: {
        getAllIngredients: function () {
            this.axios
                .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
                .then( response => {
                    this.ingredients = response.data.meals
                    console.log(this.ingredients)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getRecipe: function() {
            var recipes = []
            console.log(apiURL + this.researchedIngredient)
            this.axios
                .get(apiURL + this.researchedIngredient)
                .then( response => {
                    recipes.push(response.data.meals)
                    this.recipe = recipes[0]
                    this.idRecipe = this.recipe.idMeal
                    console.log(this.recipe.idMeal)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getIngredientRecipe: function (strMeal) {
            console.log(strMeal)
            this.axios
                .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + strMeal)
                .then( response => {
                    this.ingredientRecipe = response.data.meals
                    console.log(strMeal)
                })
        }
    },
    mounted () {
        this.getAllIngredients()
    }
}
</script>

<style scoped>
  #ul {
    list-style: none;
  }
  #main {
    margin-top: 2%;
    margin-left: 5%;
  }
  #card {
    margin-bottom: 2%;
  }
  #search {
    padding-right: 80%;
    margin-bottom: 2%;
    margin-left: 2.2%;
  }
</style>