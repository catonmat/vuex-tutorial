import { expect } from "chai";
import { shallow, mount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import Hand from './Hand.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Hand Component', () => {
  let getters;
  let store;
  let cards = [{id: 1}, {id: 2}, {id: 3}];

  beforeEach(() => {
    getters = {
      cardsIn: () => () => cards
    }

    store = new Vuex.Store({ getters });
  });

  it('should render all the cards from the store', () => {
    const hand = shallow(Hand, { store, localVue });
    const cards = hand.findAll({ name: 'Card' });

    expect(cards.length).to.equal(cards.length);
  });

  it('should trigger a playCard method on click', () => {
    const hand = mount(Hand, { store, localVue });
    const card = hand.find({ name: 'Card' });
    const playCard = sinon.stub();

    hand.setMethods({ playCard });
    card.trigger('click');

    expect(playCard.calledWith(cards[0].id)).to.equal(true);
  })
});