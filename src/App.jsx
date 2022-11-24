import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Colorbox from "./Colorbox";
import { FaPlusCircle } from "react-icons/fa";
import {FaArrowAltCircleUp} from "react-icons/fa"
import Store from "./Store";

function App() {
  const [box, setbox] = useState([]);
  const [iddata, setiddata] = useState(1);
  const [showcolor, setshowcolor] = useState(false);

  return (
    <Store.Provider value={{ box, setbox, iddata, setiddata }}>
      <div className="bg ">
        <div className="App">
          <div className="box">
            <div className="leftbox">
              <div>
                <button onClick={() => setshowcolor(!showcolor)}>
                  <FaPlusCircle
                    size={45}
                    style={{ color: "purple" }}
                    className="bounce-in-top "
                  />
                </button>
                {showcolor ? <Colorbox /> : ""}
              </div>
            </div>
            <div className="rightbox">
              <Box />

              {/* 👇️ scroll to top on button click */}
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                style={{
                  position: "fixed",
                  border:"none",
                  bottom: "40px",
                  right: "40px",
                  backgroundColor:"transparent"
                }}
                className="roll-in-bottom  "
                >
                <FaArrowAltCircleUp size={45}/>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
