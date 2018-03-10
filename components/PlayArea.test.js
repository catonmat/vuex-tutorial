import { expect } from "chai";
import { shallow, mount, createLocalVue } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import PlayArea from './PlayArea.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PlayArea Component', () => {
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
    const playArea = shallow(PlayArea, { store, localVue });
    const cards = playArea.findAll({ name: 'Card' });

    expect(cards.length).to.equal(cards.length);
  });

  it('should trigger a revealCard method on first click', () => {
    const playArea = mount(PlayArea, { store, localVue });
    const card = playArea.find({ name: 'Card' });
    const revealCards = sinon.stub();

    playArea.setMethods({ revealCards });
    card.trigger('click');

    expect(revealCards.called).to.equal(true);
  });

  it('should trigger a clearPlayArea method on second click', () => {
    const playArea = mount(PlayArea, { store, localVue });
    const card = playArea.find({ name: 'Card' });
    const clearPlayArea = sinon.stub();

    playArea.setMethods({ clearPlayArea });
    card.trigger('click');
    card.trigger('click');

    expect(clearPlayArea.called).to.equal(true);
  });
});