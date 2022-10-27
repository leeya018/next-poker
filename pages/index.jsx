import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCard, pushCard, removeCard } from "../actions";
import Card from "../components/card";

const Index = () => {
  const dispatch = useDispatch();

  const deck = useSelector((state) => state.deck);
  const thrownDeck = useSelector((state) => state.thrownDeck);
  const players = useSelector((state) => state.players);

  console.log(players);

  // const getCard = () => {
  //   const card = deck[0];
  //   dispatch(removeCard(card.id));
  //   dispatch(addCard(card));
  // };

  return (
    <>
      <div className=" bg-[#008151]">
        <div className="flex flex-col items-center bg-[#008151]">
          {/* <Hand /> */}
          <Deck />

          {/* <Hand /> */}
        </div>
        {/* <button onClick={getCard}>get a card </button>
        <div className="grid grid-cols-6 gap-2">
          {deck && deck.map((card) => <Card card={card} />)}
        </div> */}
      </div>
    </>
  );
};

const packCards =
  "https://i.pinimg.com/originals/9b/57/35/9b5735855008bb6f95f6e66c4f2f0fa6.jpg";
const Deck = ({}) => {
  const dispatch = useDispatch();
  const thrownDeck = useSelector((state) => state.thrownDeck);
  const players = useSelector((state) => state.players);

  const deck = useSelector((state) => state.deck);
  console.log(thrownDeck);
  console.log(deck);

  const getCards = (amount) => {
    if (deck.length < amount) {
      alert("no cards in deck");
      return null;
    }
    return deck.slice(0, amount);
  };

  const splitCardsToP = (player) => {
    let cards = getCards(2);
    for (const card of cards) {
      dispatch(removeCard(card));
      dispatch(pushCard(card));
      dispatch(getOneCard({ id: player.id, card }));
    }
  };

  const splitCards = () => {
    for (const player of players) {
      splitCardsToP(player);
    }
  };
  return (
    <div onClick={splitCards}>
      <img src={packCards} alt="packCards" className="w-40 h-60" />
    </div>
  );
};

export default Index;
