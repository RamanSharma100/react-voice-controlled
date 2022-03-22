import React from "react";
import {
  faMicrophone,
  faMicrophoneSlash,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { recognition } from "../../APIs/speechRecognitionAPI";

import { Button } from "../Button/Button";

import "./InitializeVoiceControls.css";

export const InitializeVoiceControls = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [isInstructionTableOpened, setIsInstructionTableOpened] =
    React.useState(false);

  const startRecognition = () => {
    recognition.start();
    setIsListening(true);
  };

  const stopRecognition = () => {
    recognition.stop();
    setIsListening(false);
  };

  recognition.onstart = () => {
    console.log("Voice recognition activated.");
  };

  recognition.onresult = (event: Object) => {
    console.log(event);
  };

  recognition.onend = () => {
    if (isListening) {
      recognition.start();
    } else {
      console.log("Voice recognition deactivated.");
      recognition.stop();
    }
  };

  return (
    <>
      <div className="initialize-voice-controls-box-layer">
        <Button
          className={`icon-button ${
            isListening ? "button-unmute" : "button-mute"
          }`}
          faIcon={isListening ? faMicrophone : faMicrophoneSlash}
          onClick={() => {
            isListening ? stopRecognition() : startRecognition();
          }}
        />
        <Button
          className={`icon-button ${
            isInstructionTableOpened ? "button-unmute" : "button-mute"
          }`}
          faIcon={faTableCells}
          onClick={() => setIsInstructionTableOpened(!isInstructionTableOpened)}
        />
      </div>
    </>
  );
};

export default InitializeVoiceControls;
