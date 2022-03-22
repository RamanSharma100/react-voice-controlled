import React from "react";
import {
  faMicrophone,
  faMicrophoneSlash,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button/Button";

import "./InitializeVoiceControls.css";

export const InitializeVoiceControls = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [isInstrctionTableOpened, setIsInstrctionTableOpened] =
    React.useState(false);

  return (
    <>
      <div className="initialize-voice-controls-box-layer">
        <Button
          className={`icon-button ${
            isListening ? "button-unmute" : "button-mute"
          }`}
          faIcon={isListening ? faMicrophone : faMicrophoneSlash}
          onClick={() => setIsListening(!isListening)}
        />
        <Button
          className={`icon-button ${
            isInstrctionTableOpened ? "button-unmute" : "button-mute"
          }`}
          faIcon={faTableCells}
          onClick={() => setIsInstrctionTableOpened(!isInstrctionTableOpened)}
        />
      </div>
    </>
  );
};

export default InitializeVoiceControls;
