import { useState } from "react";

export default function Game({}) {
  return (
    <div className="flex flex-col items-center bg-[#008151]">
      <Hand />
      <Deck />
      <button
        className="transform  ease-in-out delay-5555 bg-red-500 
      focus:-translate-y-1 hover:scale-75 hover:translate-y-full
       hover:bg-indigo-500 duration-700"
      >
        Save Changes
      </button>
      <Hand />
    </div>
  );
}

const Hand = ({}) => {
  return (
    <div className="flex">
      <Card cardOpen={king} />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Deck = ({}) => {
  return (
    <div>
      <img src={packCards} alt="packCards" className="w-40 h-60" />
    </div>
  );
};
const Card = ({ cardOpen }) => {
  return <div></div>;
};
