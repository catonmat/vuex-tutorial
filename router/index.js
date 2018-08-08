import Vue from 'vue';
import VueRouter from 'vue-router';
import TestScreen from '../components/TestScreen.vue';
import CardScreen from '../components/CardScreen.vue';
import Room from '../components/Room.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/test', component: TestScreen },
  { path: '/card/:text', component: CardScreen },
  { path: '/room/:id', component: Room },
];

const router = new VueRouter({
  routes
})

export default router;