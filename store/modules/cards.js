import axios from "axios";

// Initial state
const state = {
  collections: {}
};

export const getters = {
  cardsIn: state => location => {
    return state.collections[location] || [];
  }
};

export const mutations = {
  moveCardTo(state, payload) {
    const { cardId, origin, destination } = payload;
    const originCollection = state.collections[origin];
    const destinationCollection = state.collections[destination];
    const card = originCollection.find(card => card.id === cardId);

    axios.delete(`http://localhost:3000/${origin}/${card.id}`);
    axios.post(`http://localhost:3000/${destination}`, card);

    originCollection.splice(originCollection.indexOf(card), 1);
    destinationCollection.push(card);
  },
  setCollections(state, payload) {
    state.collections = payload;
  }
};

export const actions = {
  fetchCollections({ commit }) {
    axios
      .get('http://localhost:3000/db')
      .then(response => commit('setCollections', response.data))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
