import firebase from "../../data/firebase";

const state = {
  user: {}
};

export const getters = {
  user: state => state.user,
  loggedIn: state => 'uid' in state.user
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  },
  logOut() {
    firebase.auth().signOut();
  }
};

export const actions = {
  fetchCreds({ commit }) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        const cleanedUser = { displayName, email, photoURL, uid };

        commit('setUser', cleanedUser);
      } else {
        commit('setUser', {});
      }
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
