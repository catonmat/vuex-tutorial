import Vue from 'vue';
import VueRouter from 'vue-router';
import TestScreen from '../components/TestScreen.vue';
import CardScreen from '../components/CardScreen.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/test', component: TestScreen },
  { path: '/card/:text', component: CardScreen }
];

const router = new VueRouter({
  routes
})

export default router;