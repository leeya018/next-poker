import * as types from "./types";

export const removeCard = (card) => ({
  type: types.REMOVE_CARD,
  payload: { card },
});
export const pushCard = (card) => ({
  type: types.PUSH_CARD,
  payload: { card },
});

export const resetDeck = () => ({
  type: types.RESET_DECK,
});

export const getOneCard = (card) => ({
  type: types.GET_1_CARD,
  payload: card,
});
export const getCards = (cards) => ({
  type: types.GET_2_CARDS,
  payload: cards,
});
