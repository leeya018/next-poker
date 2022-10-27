const suits = {
  SPADE: "spade",
  DIAMOND: "diamond",
  CLUB: "club",
  HAERT: "heart",
};

const getImageSuit = (suit, value, id) => {
  switch (suit) {
    case suits.SPADE:
      return { suit: "♠", color: "text-black", value, id };
    case suits.DIAMOND:
      return { suit: "♦", color: "text-red-600", value, id };
    case suits.CLUB:
      return { suit: "♣", color: "text-black", value, id };
    case suits.HAERT:
      return { suit: "♥", color: "text-red-600", value, id };

    default:
      return "NONE";
  }
};

const createDeck = () => {
  let deck = [];
  for (let i = 1; i <= 13; i++) {
    for (const key in suits) {
      const id = Math.random();
      const card = getImageSuit(suits[key], i, id);
      deck.push(card);
    }
  }

  return deck;
};

const createPlayers = (amount) => {
  const names = ["lee", "roni"];
  let players = [];
  for (let i = 0; i < amount; i++) {
    const player = {
      id: Math.random(),
      name: names[i],
      money: 100,
      hand: [],
    };
    players.push(player);
  }
  return players;
};

export { createDeck, createPlayers };
