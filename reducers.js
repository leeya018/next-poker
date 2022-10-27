import { combineReducers } from "redux";
import * as types from "./types";
import { createDeck, createPlayers } from "./util";

const initialDeck = createDeck();
// deck REDUCER
const deckReducer = (state = initialDeck, { type, payload }) => {
  switch (type) {
    case types.REMOVE_CARD:
      return [...state].filter((card) => {
        if (card.id !== payload.card.id) {
          return card;
        }
      });
      break;
    case types.RESET_DECK:
      return initialDeck;
      break;

    default:
      return state;
      break;
  }
};

const thrownDeckReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.PUSH_CARD:
      return [...state, payload.card];
      break;
    case types.RESET_DECK:
      return [];
      break;

    default:
      return state;
      break;
  }
};

const initialPlyers = createPlayers(2);

const playersReducer = (state = initialPlyers, { type, payload }) => {
  switch (type) {
    case types.GET_2_CARDS:
      return [...state].map((player) => {
        if (player.id === payload.id) {
          return { ...player, cards: payload.cards };
        }
        return player;
      });
      break;
    case types.GET_1_CARD:
      return [...state].map((player) => {
        if (player.id === payload.id) {
          return { ...player, hand: [...player.hand, payload.card] };
        }
        return player;
      });
      break;

    default:
      return state;
      break;
  }
};

// COMBINED REDUCERS
const reducers = {
  deck: deckReducer,
  thrownDeck: thrownDeckReducer,
  players: playersReducer,
};

export default combineReducers(reducers);
