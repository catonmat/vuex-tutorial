// Initial state
const state = [
  {
    id: 'CARD000',
    text: 'Eating People.',
    position: 'deck',
    faceUp: true
  }, {
    id: 'CARD001',
    text: 'Onions.',
    position: 'deck',
    faceUp: false
  }, {
    id: 'CARD002',
    text: 'Getting blasted in the face by a t-shirt cannon.',
    position: 'deck',
    faceUp: true
  }, {
    id: 'CARD003',
    text: 'Everything.',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD004',
    text: 'Librarians.',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD005',
    text: 'Going to bed at a reasonable hour.',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD006',
    text: 'Getting this party started!',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD007',
    text: 'A duffel bag full of lizards',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD008',
    text: 'The clown that followed me home from the grovery store.',
    position: 'hand',
    faceUp: true
  }, {
    id: 'CARD009',
    text: 'Salsa Night at Dave\'s Cantina.',
    position: 'hand',
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
  }
}

export default {
  state,
  getters,
  mutations
};