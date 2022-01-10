import "../styles/index.scss";
import React from "react";

const Pc = () => {
    return(
        <div className="pc">
        <div className="pc-column">
          <div className="pc-column-row">
            <div className="pc-column-row-spaceAround">
              <div className="pc-column-row">
                <div className="pc-column-row-burger">
                  <img src="https://www.svgrepo.com/show/88949/hamburger.svg"></img>
                </div>
                <div className="pc-column-row-gala">Gala-SCSS</div>
              </div>
              <div className="pc-column-row">
                <div className="pc-column-row-idk">Abstract</div>
                <div className="pc-column-row-idk">Logos</div>
                <div className="pc-column-row-idk">Gaming</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pc-column-row">
          <div className="pc-column pc-center" style={{marginLeft:"25vw", marginTop:"20vh"}}>
            <div className="pc-column-graphic">I Do Graphic Design</div>
            <div className="pc-column-brad">Brad traversy</div>
          </div>
        </div>
      </div>
    )
}
export default Pc;