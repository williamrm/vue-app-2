<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/recette">Recette</router-link> |
      <router-link to="/ingredients">Ingredients</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  background-color: #444444;
  text-align: start;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin-inline: 30px;
}

#nav a.router-link-exact-active {
  color: #0066ff;
}
</style>
