import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import A_martiaux from '../views/A_martiaux.vue'
import Event from '../views/Event.vue'
import Carte from '../views/Carte.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //{
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import ( /* webpackChunkName: "about" */ '../views/About.vue')
    //},
    {
        path: '/a_martiaux',
        name: 'A_martiaux',
        component: A_martiaux
    },
    {
        path: '/event',
        name: 'Event',
        component: Event
    },
    {
        path: '/carte',
        name: 'Carte',
        component: Carte
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
]

const router = new VueRouter({
    routes
})

export default router