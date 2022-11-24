import React, { useContext, useState } from "react";
import Store from "./Store";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Editcomponent = ({ singlebox }) => {
  const { box, setbox, iddata, setiddata } = useContext(Store);
  const [data, setdata] = useState(false);

  const boxdelete = (_id) => {
    console.log(_id);
    var newcard = box.filter((item) => {
      return item.id !== _id;
    });
    setbox(newcard);
  };

  const hideedit = () => {
    setdata(true);
  };
  return (
    <div
      className={`card bounce-in-top`}
      
      style={{ backgroundColor: singlebox.color }}
    >
      <div className="icon" onClick={hideedit}>
        {data ? (
          <div className="textarea">
            <textarea rows="6" cols="50"
            placeholder=""
              type="text"
              style={{ backgroundColor: singlebox.color }}
            />
          </div>
        ) : (
          <FaEdit size={30} />
        )}
      </div>

      <div className="info">
        <p>{singlebox.time}</p>
        <FaTrash
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => boxdelete(singlebox.id)}
        />
      </div>
    </div>
  );
};

export default Editcomponent;
