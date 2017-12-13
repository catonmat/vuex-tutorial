import Vue from "vue";
import Vuex from "vuex";
import cards from "./modules/cards";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'
const debug = false;

export default new Vuex.Store({
  modules: {
    cards
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
