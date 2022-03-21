import React from "react";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button/Button";

import "./InitializeVoiceControls.css";

export const InitializeVoiceControls = () => {
  const [isListening, setIsListening] = React.useState(false);

  return (
    <>
      <div className="initialize-voice-controls-box-layer">
        <Button
          className={`icon-button ${
            isListening ? "button-mute" : "button-unmute"
          }`}
          faIcon={isListening ? faMicrophoneSlash : faMicrophone}
          onClick={() => setIsListening(!isListening)}
        />
      </div>
    </>
  );
};

export default InitializeVoiceControls;
