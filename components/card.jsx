import { useState } from "react";

const backCard =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Card_back_01.svg/703px-Card_back_01.svg.png";

export default function Card({ card }) {
  const [open, setOpen] = useState(false);
  const { suit, color, value, id } = card;
  const handleCardClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="w-40 h-60" onClick={handleCardClick}>
      {open ? (
        <div className="flex relative justify-center items-center border-2 border-black h-full">
          <div className={`text-5xl ${color}`}>{value}</div>
          <div className={`absolute text-5xl top-1 left-3 ${color}`}>
            {suit}
          </div>
          <div className={`absolute text-5xl bottom-1 right-3 ${color}`}>
            {suit}
          </div>
        </div>
      ) : (
        <img src={backCard} alt="backcard" />
      )}
    </div>
  );
}
