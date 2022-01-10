import "../styles/index.scss";
import React, { useState } from "react";
import See from "./see";
import See02 from "./see02";
import Zoom from "./zoom";

const Work03 = () => {
  const [look, setLook] = useState(false);
  const [url, setUrl] = useState("");
  const zoom = (url) => {
    setUrl(url);
    setLook(!look);
  };
  return (
    <div>
      <div className="work03">
        {look === false ? (
          <div>
            <See
              bigWord="Goku"
              littleWord=".............................."
              picture="https://c4.wallpaperflare.com/wallpaper/548/274/337/dbz-dragon-ball-z-goku-dragon-ball-super-wallpaper-preview.jpg"
              click={zoom}
            />
          </div>
        ) : (
          <Zoom look={look} setLook={setLook} url={url} />
        )}

        <div>
        <See02
                bigWord="Goku"
                littleWord=".............................."
                picture="https://c4.wallpaperflare.com/wallpaper/109/220/12/dragon-ball-dragon-ball-super-ultra-instinct-son-goku-wallpaper-preview.jpg"
              />
        </div>
        <div>
          <See
            bigWord="City"
            littleWord=".............................."
            picture="https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg"
          />
        </div>
        <div>
          <See02
            bigWord="Chill"
            littleWord=".............................."
            picture="https://c4.wallpaperflare.com/wallpaper/260/621/103/tower-block-city-lights-night-sky-reflection-wallpaper-preview.jpg"
          />
        </div>
        <div className="pc-about_me">
          <div className="column">
            <div className="row">
              <div
                className="column"
                style={{ color: "#fff", marginLeft: "10vw", marginTop: "10vh" }}
              >
                <div style={{ fontSize: "2vw" }}>About Me</div>
                <div style={{ fontSize: "1vw", marginTop: "2vh" }}>
                  You can use rows and columns here to organize your footer
                  content.
                </div>
              </div>
              <div
                className="column"
                style={{ color: "#fff", marginLeft: "30vw", marginTop: "10vh" }}
              >
                <div style={{ fontSize: "2vw" }}>Links</div>
                <div style={{ fontSize: "1vw", marginTop: "2vh" }}>
                  Abstract
                </div>
                <div style={{ fontSize: "1vw", marginTop: "2vh" }}>Logos</div>
                <div style={{ fontSize: "1vw", marginTop: "2vh" }}>Gaming</div>
              </div>
            </div>
            <div className="gaiii">
              <div className="row">
                <div
                  style={{
                    color: "#fff",
                    marginTop: "3vh",
                    fontSize: "2vw",
                    marginLeft: "10vw",
                  }}
                >
                  C 2018 Galappear
                </div>
                <div
                  style={{
                    color: "#fff",
                    marginTop: "3vh",
                    fontSize: "2vw",
                    marginLeft: "50vw",
                  }}
                >
                  More Links
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work03;
