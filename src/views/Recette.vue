<template>
    <div class="app" id="main">
        <input v-model="researchedRecipe" placeholder="Search a recipe">
        <button @click="getRecipe">Search</button>
        <div v-if="recipe.length>0">
            <ul id="ul">
                <li v-for="rec in recipe" :key="rec.idMeal">
                    <b-card
                        v-bind:title=rec.strMeal
                        v-bind:img-src=rec.strMealThumb img-width="400rem" img-height="400rem"
                        img-left
                        style="max-width: 100rem; max-height: 100rem;"
                        id="card"
                    >
                        <b-card-text>
                            Origin : {{ rec.strArea }}
                        </b-card-text>
                        <span style="font-weight: bold">Ingredients : </span>    
                        <b-card-text v-for="(ing, index) in rec.ingredients" :key="index" id="ing">
                            {{ ing.n_quantity }} {{ ing.name }}  ,
                        </b-card-text>
                        <b-card-text>
                            Instruction : {{ rec.strInstructions }}
                        </b-card-text>
                    </b-card>
                </li>
                <span> Powered with Kevin JUGUIN and François-Pierre ROUSSEAU</span>
            </ul>
        </div>
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
            var i = 1
            let strQuantity = "strMeasure"
            let strIngredient = "strIngredient"

            console.log(apiURL + this.researchedRecipe)
            this.axios
                .get(apiURL + this.researchedRecipe)
                .then( response => {
                    let recipes = response.data.meals

                    recipes.map((r) => {
                        r.ingredients = []
                        r.quantity = []
                        for (i = 1; i < 21; i++) {
                            strQuantity = strQuantity+i
                            strIngredient = strIngredient+i

                            if (r[strIngredient] != "" && r[strIngredient] != null) {
                                r.ingredients.push({
                                    name: r[strIngredient],
                                    n_quantity: r[strQuantity]
                                })
                                console.log(this.ingredient)
                            }

                            strIngredient = "strIngredient"
                            strQuantity = "strMeasure"
                        }
                    })
                    this.recipe = recipes
                    console.log(this.recipe)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getQuantity: function() {
            var i = 1
            let strQuantity = "strMeasure"
            let strIngredient = "strIngredient"

            for (const key in this.recipe) {
                if (Object.hasOwnProperty.call(this.recipe, key)) {
                    const element = this.recipe[key]
                    for (i = 1; i < 21; i++) {
                        strQuantity = strQuantity+i
                        if (element[strQuantity] != "" && element[strQuantity] != null) {
                            this.quantity.push(element[strQuantity])
                            console.log(this.quantity)
                        }
                        strQuantity = "strMeasure"

                        strIngredient = strIngredient+i
                        if (element[strIngredient] != "" && element[strIngredient] != null) {
                            this.ingredient.push(element[strIngredient])
                            console.log(this.ingredient)
                        }
                        strIngredient = "strIngredient"
                    }
                }
            }
        },
    },
}
</script>

<style scoped>
  #ul {
    list-style: none;
  }
  #ing {
      display: inline-flex;
  }
  #main {
    margin-top: 2%;
    margin-left: 5%;
  }
  #card {
    margin-bottom: 2%;
  }
</style>