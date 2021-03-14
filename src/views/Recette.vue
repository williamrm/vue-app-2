<template>
    <div class="app">
        <input v-model="researchedRecipe" placeholder="Search a recipe">
        <button @click="getRecipe">Search</button>
        <ul v-if="recipe.length>0" id="ul">
            <li v-for="rec in recipe[0]" :key="rec.idMeal">
                <b-card
                    v-bind:title=rec.strMeal
                    v-bind:img-src=rec.strMealThumb
                    img-top
                    style="max-width: 25rem;"
                >
                    <b-card-text>
                        Origin : {{ rec.strArea }}
                    </b-card-text>
                    <b-card-text>
                        Main ingredients : {{ rec.strIngredient1 }}, 
                        {{ rec.strIngredient2 }},
                        {{ rec.strIngredient3 }},
                        {{ rec.strIngredient4 }},
                        {{ rec.strIngredient5 }},
                        {{ rec.strIngredient6 }}
                    </b-card-text>
                </b-card>
            </li>
        </ul>
    </div>
</template>

<script>
const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
export default {
    name: 'app',

    data() {
        return {
            recipe: [],
            researchedRecipe: '',
        }
    },

    methods: {
        getRecipe: function() {
            this.recipe = []
            console.log(apiURL + this.researchedRecipe)
            this.axios
                .get(apiURL + this.researchedRecipe)
                .then( response => {
                    this.recipe.push(response.data.meals)
                    
                    console.log(this.recipe[0])
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