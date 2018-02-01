// Initial state
const state = [
  {
    id: 'CARD000',
    text: 'Eating People.',
    position: 'player_1',
    faceUp: true
  }, {
    id: 'CARD001',
    text: 'Onions.',
    position: 'player_1',
    faceUp: false
  }, {
    id: 'CARD002',
    text: 'Getting blasted in the face by a t-shirt cannon.',
    position: 'player_1',
    faceUp: true
  }, {
    id: 'CARD003',
    text: 'Everything.',
    position: 'deck',
    faceUp: true
  }, {
    id: 'CARD004',
    text: 'Librarians.',
    position: 'deck',
    faceUp: true
  }, {
    id: 'CARD005',
    text: 'Going to bed at a reasonable hour.',
    position: 'playArea',
    faceUp: true
  }, {
    id: 'CARD006',
    text: 'Getting this party started!',
    position: 'playArea',
    faceUp: true
  }, {
    id: 'CARD007',
    text: 'A duffel bag full of lizards',
    position: 'playArea',
    faceUp: true
  }, {
    id: 'CARD008',
    text: 'The clown that followed me home from the grovery store.',
    position: 'player_1',
    faceUp: true
  }, {
    id: 'CARD009',
    text: 'Salsa Night at Dave\'s Cantina.',
    position: 'player_1',
    faceUp: true
  }
];

export const getters = {
  cardsIn: state => location =>  {
    return state.filter(card => card.position === location)
  }
}

export const mutations = {
  turnCardOver (state, cardId) {
    const card = state.find(card => card.id === cardId);
    card.faceUp = !card.faceUp;
  },
  moveCardTo (state, payload) {
    const { cardId, destination } = payload;
    const card = state.find(card => card.id === cardId);
    card.position = destination;
  }
}

export default {
  state,
  getters,
  mutations
};