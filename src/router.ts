import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import CharactersPage from './components/CharactersPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/AboutPage.vue'),
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersPage,
    },
  ],
});
