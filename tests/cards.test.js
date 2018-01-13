// cards.test.js
import { expect } from "chai";
import { getters, mutations } from "../store/modules/cards";

describe("getters", () => {
  it("should filter the deck cards", () => {
    // mock state
    const state = [
      {
        id: "CARD000",
        text: "Eating People.",
        position: "deck",
        faceUp: true
      },
      {
        id: "CARD001",
        text: "Onions.",
        position: "hand",
        faceUp: false
      },
      {
        id: "CARD002",
        text: "Getting blasted in the face by a t-shirt cannon.",
        position: "deck",
        faceUp: true
      }
    ];

    // mock getter
    const location = "deck";

    // get the result from the gette
    const result = getters.cardsIn(state)(location);

    // assert the result
    expect(result).to.deep.equal([
      {
        id: "CARD000",
        text: "Eating People.",
        position: "deck",
        faceUp: true
      },
      {
        id: "CARD002",
        text: "Getting blasted in the face by a t-shirt cannon.",
        position: "deck",
        faceUp: true
      }
    ]);
  });
});

describe("mutations", () => {
  it("should flip a card over", () => {
    const state = [
      {
        id: "CARD000",
        text: "Eating People.",
        position: "deck",
        faceUp: true
      }
    ];

    const cardId = "CARD000";

    mutations.turnCardOver(state, cardId);

    expect(state[0].faceUp).to.equal(false);
  });

  it("should move a card from the deck to the hand", () => {
    const state = [
      {
        id: "CARD000",
        text: "Eating People.",
        position: "deck",
        faceUp: true
      }
    ];

    const cardId = "CARD000";
    const destination = "hand";

    mutations.moveCardTo(state, {
      cardId,
      destination
    });

    expect(state[0].position).to.equal(destination);
  });
});
