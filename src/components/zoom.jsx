import "../styles/index.scss";
import React from "react";

const Zoom = ({url, look, setLook}) => {
    const change = () => {
        setLook(!look)
    }
    return <div className="zoom">
        <img onClick={change} src={url}></img>
    </div>
}
export default Zoom;