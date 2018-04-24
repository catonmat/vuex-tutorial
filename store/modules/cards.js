import axios from "axios";

// Initial state
const state = {
  collections: {}
};

axios
  .get('http://localhost:3000/db')
  .then(response => state.collections = response.data)

export const getters = {
  cardsIn: state => location => {
    return state.collections[location];
  }
};

export const mutations = {
  moveCardTo(state, payload) {
    const { cardId, origin, destination } = payload;
    const originCollection = state.collections[origin];
    const destinationCollection = state.collections[destination];
    const card = originCollection.find(card => card.id === cardId);

    originCollection.splice(originCollection.indexOf(card), 1);
    destinationCollection.push(card);
  }
};

export default {
  state,
  getters,
  mutations
};
