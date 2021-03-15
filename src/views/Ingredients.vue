<template>
    <div class="app">
        <input v-model="researchedIngredient" placeholder="Search a ingredient">
        <button @click="getRecipe">Search</button>
        <ul v-if="recipe.length>0" id="ul">
            <li v-for="rec in recipe" :key="rec.idMeal">
                <b-card
                    v-bind:title=rec.strMeal
                    v-bind:img-src=rec.strMealThumb img-width=" 300rem"
                    img-left
                    style="max-width: 100rem;"
                >
                </b-card>
            </li>
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
                    console.log(this.recipe)
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
</style>