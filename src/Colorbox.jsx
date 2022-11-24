import React, { useContext, useState } from "react";
import Store from "./Store";

const colordata = [
  "#2BAE66FF",
  "#FCF951FF",
  "#E15D44",
  "#b284be",
  "#078282FF",
  "#404ac4",
  "#A13941FF",
  "#CD5C5C",
  "#FF8C00",
  "#DE3163"

];

const Colorbox = () => {
  const { box, setbox, iddata, setiddata } = useContext(Store);

  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const getId = () => {
    setiddata(iddata + 1);
    return iddata;
  };
  const addCard = (color) => {
    setbox([
      ...box,
      {
        id: getId(),
        color: color,
        time: date.toLocaleString("en-US"),
      },
    ]);
  };

  return colordata.map((btn, index) => {
    return (
      <button
        style={{ backgroundColor: `${btn}` }}
        key={index}
        className="colorbtn puff-in-center "
        onClick={() => addCard(btn)}
      ></button>
    );
  });
};

export default Colorbox;
