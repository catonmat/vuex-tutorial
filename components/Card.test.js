import { expect } from "chai";
import { shallow } from '@vue/test-utils';
import Card from './Card.vue';

describe('Card Component', () => {
  it('should show the back of the card when no props are passed', () => {
    const card = shallow(Card);

    expect(card.text()).to.equal('Devs Against Humanity');
  });

  it('should show the card text prop passed to it when the card is face up', () =>{
    const card = shallow(Card);
    const text = 'This is an example of the card text';
    card.setProps({ text, faceUp: true });

    expect(card.text()).to.equal(text);
  });

  it('should not show the card text when it is face down', () => {
    const card = shallow(Card);
    const text = "I should not be shown";
    card.setProps({ text });

    expect(card.text()).to.not.equal(text);
    expect(card.text()).to.equal('Devs Against Humanity');
  });
})