// Initial state
const state = {
  collections: {
    deck: [
      { id: "CARD000", text: "Eating People." },
      { id: "CARD001", text: "Onions." },
      { id: "CARD002", text: "Getting blasted in the face by a t-shirt cannon." },
      { id: "CARD003", text: "Everything." }
    ],
    playArea: [
      { id: "CARD004", text: "Librarians." },
      { id: "CARD005", text: "Going to bed at a reasonable hour." },
      { id: "CARD006", text: "Getting this party started!" }
    ],
    player_1: [
      { id: "CARD007", text: "A duffel bag full of lizards" },
      { id: "CARD008", text: "The clown that followed me home from the grocery store." },
      { id: "CARD009", text: "Salsa Night at Dave's Cantina." }
    ]
  }
};

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
