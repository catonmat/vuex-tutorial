import axios from "axios";
import firebase from "../../data/firebase";

let collections;
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
    const destinationCollection = state.collections[destination] || [];
    const card = originCollection.find(card => card.id === cardId);

    originCollection.splice(originCollection.indexOf(card), 1);
    destinationCollection.push(card);

    collections.child(origin).set(originCollection);
    collections.child(destination).set(destinationCollection);
  },
  setCollections(state, payload) {
    state.collections = payload;
  }
};

export const actions = {
  fetchCollections({ commit }, roomId) {
    console.log(roomId);
    collections = firebase.database.ref(`rooms/${roomId}/collections`);
    collections.on('value', snapshot => {
      commit('setCollections', snapshot.val())
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
