import { expect } from "chai";
import { shallow, mount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import Deck from './Deck.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Deck Component', () => {
  let getters;
  let store;
  let cards = [{}, {}, {}];

  beforeEach(() => {
    getters = {
      cardsIn: () => () => cards
    }

    store = new Vuex.Store({ getters });
  });

  it('should render all the cards from the store', () => {
    const deck = shallow(Deck, { store, localVue });
    const cards = deck.findAll({ name: 'Card' });

    expect(cards.length).to.equal(cards.length);
  });

  it('should trigger a drawCard method on click', () => {
    const deck = mount(Deck, { store, localVue });
    const card = deck.find({ name: 'Card' });
    const drawCard = sinon.stub();

    deck.setMethods({ drawCard });
    card.trigger('click');

    expect(drawCard.called).to.equal(true);
  })
});