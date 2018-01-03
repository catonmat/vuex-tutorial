// getters.spec.js
import { expect } from "chai";
import { getters } from "../store/modules/cards";

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
