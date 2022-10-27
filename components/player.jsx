import { useDispatch, useSelector } from "react-redux";

export default function Player({ playerNumber }) {
  const players = useSelector((state) => state.players);
  const p = players[playerNumber];
  const { id, name, money, hand } = p;
  return (
    <div className="flex flex-col">
      <div>{id}</div>
      <div>{name}</div>
      <div>name</div>
      <div>name</div>
    </div>
  );
}
