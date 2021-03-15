<template>
    <div class="app" id="main">
        <input v-model="researchedIngredient" placeholder="Search a ingredient">
        <button @click="getRecipe">Search</button>
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
        }
    },

    methods: {
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
        }
    },
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
</style>