import firebase from "../../data/firebase";

const state = {
  user: { userId: 1234 }
};

export const getters = {
  getUser: state => {
    return state.user
  }
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  }
};

export const actions = {
  banana({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  },
  logIn({ commit }) {
    // Log in and get user data from firebase
    firebase.auth().getRedirectResult().then(function(result) {
        const { displayName, email, photoURL, uid } = result.user;
        const user = { displayName, email, photoURL, uid };
        commit('setUser', user);
      }).catch(function(error) {
        // TODO: Actually handle this error
        debugger;
      });
    }
}

export default {
  state,
  getters,
  mutations,
  actions
};
