import React from "react";
import "../styles/index.scss";
import { useState } from "react";
import Work02_phone from "./work02_phone";

const Phone = () => {
  const [hide, setHide] = useState(false);
  let idk = () => {
    setHide(!hide);
  };
  
  return (
    // <div className=>
    <div>
      {hide && (
        <div className="phone-option">
          <div className="phone-option-id01">Abstract</div>
          <div className="phone-option-id01">Logos</div>
          <div className="phone-option-id01">Gaming</div>
        </div>
      )}
      <div
        className={hide === false ? "phone" : "phone-opacity"}
        onClick={() => hide && setHide(false)}
      >
        <div className="phone-column">
          <div className="phone-column-row">
            <div onClick={idk} className="phone-column-row-burger">
              <img src="https://www.svgrepo.com/show/88949/hamburger.svg"></img>
            </div>
            <div className="phone-column-row-gala">Gala-SCSS</div>
          </div>
        </div>
        <div className="phone-column-row">
          <div
            className="phone-column phone-center"
            style={{ marginLeft: "25vw", marginTop: "5vh" }}
          >
            <div className="phone-column-graphic">I Do Graphic Design</div>
            <div className="phone-column-brad">Brad traversy</div>
          </div>
        </div>
      </div>
      <Work02_phone url="https://i.insider.com/60117b551d2df20018b71117?width=2000&format=jpeg&auto=webp"/>
      <Work02_phone url="https://media.istockphoto.com/photos/peeled-banana-on-white-background-photo-with-clipping-path-picture-id1154935375?k=20&m=1154935375&s=612x612&w=0&h=TALq0lrR1PI5XuGxqjUnss-tJBIUHuys1lCDbzSrPKU="/>
      <Work02_phone url="https://i.insider.com/60117b551d2df20018b71117?width=2000&format=jpeg&auto=webp"/>
      <Work02_phone url="https://media.istockphoto.com/photos/peeled-banana-on-white-background-photo-with-clipping-path-picture-id1154935375?k=20&m=1154935375&s=612x612&w=0&h=TALq0lrR1PI5XuGxqjUnss-tJBIUHuys1lCDbzSrPKU="/>
    </div>
  );
};
export default Phone;
