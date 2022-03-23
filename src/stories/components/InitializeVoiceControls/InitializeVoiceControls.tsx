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
import { IVoiceCommandsProps } from "../../interfaces";
import { checkCommandType, ICommandType } from "../../methods/checkCommandType";
import VoiceControlsInstructionTable from "../VoiceControlsInstructionTable/VoiceControlsInstructionTable";

interface InitializeVoiceControlsProps {
  commands: IVoiceCommandsProps;
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
    React.useState<boolean>(true);

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
    const command: string = event.results[0][0].transcript.replace(".", "");
    const { commandType, cmd, cmdName }: ICommandType = checkCommandType(
      commands,
      command
    );

    //stop taking commands

    if (isListening && command.toLowerCase().includes("stop taking commands")) {
      stopRecognition();

      return;
    }

    // open commands table commands
    if (
      isListening &&
      (command.toLowerCase().includes("open commands table") ||
        command.toLowerCase().includes("open command table") ||
        command.toLowerCase().includes("open instruction table") ||
        command.toLowerCase().includes("close command table") ||
        command.toLowerCase().includes("close instruction table") ||
        command.toLowerCase().includes("close commands table"))
    ) {
      if (
        command.toLowerCase().includes("open commands table") ||
        command.toLowerCase().includes("open command table") ||
        command.toLowerCase().includes("open instruction table")
      ) {
        if (!isInstructionTableOpened) {
          setIsInstructionTableOpened(true);
          toast.info("Opened Commands Table!");
        } else {
          toast.info("Commands Table is already opened!");
          toast.info("Try, Close Commands Table Command");
        }
      }

      if (
        command.toLowerCase().includes("close command table") ||
        command.toLowerCase().includes("close instruction table") ||
        command.toLowerCase().includes("close commands table")
      ) {
        if (isInstructionTableOpened) {
          setIsInstructionTableOpened(false);
          toast.info("Closed Commands Table!");
        } else {
          toast.info("Commands Table is already closed!");
          toast.info("Try, Open Commands Table Command");
        }
      }
    }

    // navigation commands
    if (enableNavigationControls) {
      if (commandType === "navigation") {
        let route: string = "";
        if (commands.navigation?.includes(cmdName.toLowerCase())) {
          if (command.split(" ")[command.split(" ").length - 1] === "page") {
            route = cmd.split(" ")[cmd.split(" ").indexOf("page") - 1];
          }
          if (command.split(" ")[command.split(" ").length - 1] === "route") {
            route = cmd.split(" ")[cmd.split(" ").indexOf("route") - 1];
          }

          if (route && route !== "") {
            if (route === "home" || route === "index") {
              window.location.href = "/";
              return;
            }
            if (routes.includes("/" + route)) {
              window.location.href = "/" + route;
              return;
            } else {
              toast.error("This route is not available!");
            }
          }
        }
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

      {isInstructionTableOpened && (
        <VoiceControlsInstructionTable
          commands={commands}
          enableNavigationControls={enableNavigationControls}
          enableScrollingControls={enableScrollingControls}
          setIsInstructionTableOpened={setIsInstructionTableOpened}
          routes={routes}
          startRecognition={startRecognition}
          isListening={isListening}
        />
      )}

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
          onClick={() => {
            setIsInstructionTableOpened(!isInstructionTableOpened);
            toast.info(
              isInstructionTableOpened
                ? "Closed Instruction Table"
                : "Opened Instruction Table"
            );
          }}
        />
      </div>
    </>
  );
};

export default InitializeVoiceControls;
