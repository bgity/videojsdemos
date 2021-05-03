import React from "react";
import "./ForwardBackOverlayChild.css";
import forward from "../../assets/ico_player_30sforward.png";
import backWard from "../../assets/ico_player_30sback.png";

const ForwardBackOverlayChild = (props) => {
  const videoObject = props.playerObject;

  const videoForwardClickHandler = () => {
    videoObject.currentTime(videoObject.currentTime() + 30);
  };
  const videoBackwardClickHandler = () => {
    videoObject.currentTime(videoObject.currentTime() - 30);
  };

  return (
    <div className="hello">
      <img
        src={backWard}
        alt=""
        className="back-30s"
        onClick={videoBackwardClickHandler}
      />
      <img
        src={forward}
        alt=""
        className="forward-30s"
        onClick={videoForwardClickHandler}
      />
    </div>
  );
};

export default ForwardBackOverlayChild;
