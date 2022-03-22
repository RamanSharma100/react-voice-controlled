import React, { FunctionComponent as FC } from "react";
import {
  faMicrophone,
  faMicrophoneSlash,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

import { recognition } from "../../APIs/speechRecognitionAPI";

import { Button } from "../Button/Button";

import "react-toastify/dist/ReactToastify.css";
import "./InitializeVoiceControls.css";

interface VoiceCommandsProps {
  navigation?: string[];
  scrolling?: string[];
}

interface InitializeVoiceControlsProps {
  commands: VoiceCommandsProps;
  routes?: string[];
  enableNavigationControls: boolean;
  enableScrollingControls: boolean;
}

export const InitializeVoiceControls: FC<InitializeVoiceControlsProps> = ({
  commands = {
    navigation: [],
    scrolling: [],
  },
  enableNavigationControls = false,
  enableScrollingControls = false,
  routes = [],
}) => {
  const [isListening, setIsListening] = React.useState<boolean>(false);
  const [isInstructionTableOpened, setIsInstructionTableOpened] =
    React.useState<boolean>(false);

  const startRecognition = (): void => {
    recognition.start();
    toast.info("Started Listening Commands!");
    setIsListening(true);
  };

  const stopRecognition = (): void => {
    recognition.stop();
    toast.info("Stopped Listening Commands!");
    setIsListening(false);
  };

  recognition.onstart = (): void => {
    console.log("Voice recognition activated.");
  };

  recognition.onresult = (event: any): void => {
    const command: string = event.results[0][0].transcript;
    console.log(command);
    // navigation commands
    if (enableNavigationControls) {
      if (
        commands.navigation?.find((cmd) =>
          cmd.toLowerCase().includes(command.toLowerCase())
        )
      ) {
        console.log("Navigation command detected!");
        const routeName = command.replace(/\s/g, "");
        console.log(routeName);
        // if(routes.includes(command)) {
        //   window.location.href = command;

        // } else {
        //   toast.error(`Command not found: ${command}`);
        // }
      }
    }
  };

  recognition.onend = (): void => {
    if (isListening) {
      recognition.start();
    } else {
      console.log("Voice recognition deactivated.");

      recognition.stop();
    }
  };

  return (
    <>
      <ToastContainer />
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
