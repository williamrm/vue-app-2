<template>
  <div class="home">
    <b-card-group>
      <ul v-if="ramdomRecipes.length>0" id="ul">
      <li v-for="ramdom in ramdomRecipes" :key="ramdom.idMeal">
          <b-card
            v-bind:title=ramdom.strMeal
            v-bind:img-src=ramdom.strMealThumb
            img-top
            style="max-width: 25rem;"
          >
            <b-card-text>
              Origin : {{ ramdom.strArea }}
            </b-card-text>
            <b-card-text>
              Main ingredients : {{ ramdom.strIngredient1 }}, 
              {{ ramdom.strIngredient2 }},
              {{ ramdom.strIngredient3 }},
              {{ ramdom.strIngredient4 }},
              {{ ramdom.strIngredient5 }},
              {{ ramdom.strIngredient6 }}
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
      var i= 0
      for(i; i <5; i++){
        this.axios
          .get(apiURL + 'random.php')
          .then( response => {
            this.ramdomRecipes.push(response.data.meals[0])
          })
          .catch((error) => {
            console.log(error);
          })
      }
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
</style>