import "../styles/index.scss";
import React, {useState} from "react";

const Work02_phone = ({url}) => {
  const [star, setStar] = useState(false);
  let black = () => {
    setStar(!star);
  };
  const [star1, setStar1] = useState(false);
  let black1 = () => {
    setStar1(!star1);
  };
  const [star2, setStar2] = useState(false);
  let black2 = () => {
    setStar2(!star2);
  };
  const [star3, setStar3] = useState(false);
  let black3 = () => {
    setStar3(!star3);
  };
  const [star4, setStar4] = useState(false);
  let black4 = () => {
    setStar4(!star4);
  };
  return (
    <div>
      <div className="work02">
          <div
            className="row-picture"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
          <div className="row-picture-gai2">
            <div className="row-picture-gai2-stars">
              {star === false ? (
                <div
                  className="row-picture-gai2-stars-star"
                  onClick={black}
                ></div>
              ) : (
                <div
                  className="row-picture-gai2-stars-star2"
                  onClick={black}
                ></div>
              )}
              {star1 === false ? (
                <div
                  className="row-picture-gai2-stars-star"
                  onClick={black1}
                ></div>
              ) : (
                <div
                  className="row-picture-gai2-stars-star2"
                  onClick={black1}
                ></div>
              )}{" "}
              {star2 === false ? (
                <div
                  className="row-picture-gai2-stars-star"
                  onClick={black2}
                ></div>
              ) : (
                <div
                  className="row-picture-gai2-stars-star2"
                  onClick={black2}
                ></div>
              )}{" "}
              {star3 === false ? (
                <div
                  className="row-picture-gai2-stars-star"
                  onClick={black3}
                ></div>
              ) : (
                <div
                  className="row-picture-gai2-stars-star2"
                  onClick={black3}
                ></div>
              )}{" "}
              {star4 === false ? (
                <div
                  className="row-picture-gai2-stars-star"
                  onClick={black4}
                ></div>
              ) : (
                <div
                  className="row-picture-gai2-stars-star2"
                  onClick={black4}
                ></div>
              )}
            </div>
            <div className="row-picture-gai2-nemeh">+</div>
          </div>
        </div>
      </div>
  );
};
export default Work02_phone;
