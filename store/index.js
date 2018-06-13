import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import cards from "./modules/cards";
import firebase from "../data/firebase";

Vue.use(Vuex);
Vue.use(firebase);

// const debug = process.env.NODE_ENV !== 'production'
const debug = true;

export default new Vuex.Store({
  modules: {
    auth,
    cards
  },
  strict: debug,
});
