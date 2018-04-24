// cards.test.js
import { expect } from "chai";
import { getters, mutations } from "./cards";

const deepCopy = object => JSON.parse(JSON.stringify(object));

const initialState = {
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
    hand: [
      { id: "CARD007", text: "A duffel bag full of lizards" },
      { id: "CARD008", text: "The clown that followed me home from the grocery store." },
      { id: "CARD009", text: "Salsa Night at Dave's Cantina." }
    ]
  }
};

describe("getters", () => {
  it("should filter the deck cards", () => {
    const state = deepCopy(initialState);
    const location = "deck";
    const result = getters.cardsIn(state)(location);

    expect(result).to.deep.equal(initialState.collections.deck);
  });

  it("should return an empty array for a non-existent collection", () => {
    const state = deepCopy(initialState);
    const location = "notacollection";
    const result = getters.cardsIn(state)(location);

    expect(result).to.not.be.undefined;
    expect(result).to.be.an('array').that.is.empty;
  })
});

describe("mutations", () => {
  describe("moveCardTo", () => {
    const cardId = "CARD000";
    const origin = "deck";
    const destination = "hand";
    let state;

    beforeEach(() => {
      state = deepCopy(initialState);
      
      mutations.moveCardTo(state, {
        cardId,
        origin,
        destination
      });
    });

    it("should have one less card in the deck", () => {  
      expect(state.collections.deck)
        .to.have.length(initialState.collections.deck.length - 1);
    });

    it("should have one more card in the hand", () => {  
      expect(state.collections.hand)
        .to.have.length(initialState.collections.hand.length + 1);
    });
    
    it("should have the last card in the hand be the one we just moved", () => {  
      expect(state.collections.hand[state.collections.hand.length - 1].id)
        .to.equal(cardId);
    });
  })
});
