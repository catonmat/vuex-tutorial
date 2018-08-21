import firebase from "../../data/firebase";

let collections_ref;
let blackCards_ref;

const state = {
  collections: {},
  blackCards: [],
};

export const getters = {
  cardsIn: state => location => {
    return state.collections[location] || [];
  },
  blackCard: state => {
    const { blackCards } = state;
    return blackCards ? blackCards[blackCards.length - 1] :  null;
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

    collections_ref.child(origin).set(originCollection);
    collections_ref.child(destination).set(destinationCollection);
  },
  nextBlackCard(state) {
    const { blackCards } = state;
    if (!blackCards) return;
    blackCards_ref.child(blackCards.length - 1).remove();
  },
  setCollections(state, payload) {
    state.collections = payload;
  },
  setBlackCards(state, payload) {
    state.blackCards = payload;
  }
};

export const actions = {
  fetchCollections({ commit }, roomId) {
    collections_ref = firebase.database.ref(`rooms/${roomId}/collections`);
    collections_ref.on('value', snapshot => {
      commit('setCollections', snapshot.val())
    });
  },
  fetchBlackCards({ commit }, roomId) {
    blackCards_ref = firebase.database.ref(`rooms/${roomId}/blackCards`);
    blackCards_ref.on('value', snapshot => {
      commit('setBlackCards', snapshot.val())
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
