<template>
  <div class="home" id="main">
    <b-card-group>
      <ul v-if="ramdomRecipes.length>0" id="ul">
      <li v-for="ramdom in ramdomRecipes" :key="ramdom.idMeal">
          <b-card
            v-bind:title=ramdom.strMeal
            v-bind:img-src=ramdom.strMealThumb img-width="400rem" img-height="400rem"
            img-left
            style="max-width: 100rem; max-height: 100rem;"
            id="card"
          >
            <b-card-text>
              Origin : {{ ramdom.strArea }}
            </b-card-text>
            <span style="font-weight: bold">Ingredients : </span>
            <b-card-text v-for="(ing, index) in ramdom.ingredients" :key="index" id="ing">
              {{ ing.n_quantity }} {{ ing.name }}  ,
            </b-card-text>
            <b-card-text>
              Instruction : {{ ramdom.strInstructions }}
            </b-card-text>
          </b-card>
        </li>
      </ul>
    </b-card-group>
    
  </div>
</template>

<script>
const apiURL = 'https://www.themealdb.com/api/json/v1/1/'
export default {
  name: 'Home',
  data () {
    return {
      info: null,
      ramdomRecipes : []
    }
  },
  components: {
    
  },
  methods: {
    ramdom: function() {
      this.ramdomRecipes = []
      let recipes = []
      var i = 0
      var j = 0
      let strQuantity = "strMeasure"
      let strIngredient = "strIngredient"

      for(i; i <10; i++){
        this.axios
          .get(apiURL + 'random.php')
          .then( response => {
            recipes = response.data.meals
            console.log(recipes)
            recipes.map((r) => {
              r.ingredients = []
              r.quantity = []
              for (j = 1; j < 21; j++) {
                strQuantity = strQuantity+j
                strIngredient = strIngredient+j

                if (r[strIngredient] != "" && r[strIngredient] != null) {
                  r.ingredients.push({
                    name: r[strIngredient],
                    n_quantity: r[strQuantity]
                  })
                  }

                  strIngredient = "strIngredient"
                  strQuantity = "strMeasure"
                  }
            })
            //this.ramdomRecipes = recipes
            this.ramdomRecipes.push(recipes[0])
          })
          .catch((error) => {
            console.log(error);
          })
      }
      
      console.log(this.ramdomRecipes)
    }
  },
  mounted () {
    this.ramdom()
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
  #ing {
      display: inline-flex;
  }
  #card {
    margin-bottom: 2%;
  }
</style>