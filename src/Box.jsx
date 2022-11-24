import React, { useContext} from "react";
import Store from "./Store";
import Editcomponent from "./Editcomponent";

const Box = () => {
  const { box, setbox, iddata, setiddata } = useContext(Store);
  return (
    <>
      {box.map((singlebox) => {
       return (
        <Editcomponent singlebox={singlebox} key={singlebox.id}/>
        );
      })}
    </>
  );
};

export default Box;
