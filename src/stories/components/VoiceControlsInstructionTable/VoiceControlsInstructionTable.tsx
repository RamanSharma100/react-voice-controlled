import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { FunctionComponent as FC } from "react";
import { toast } from "react-toastify";
import { IVoiceCommandsProps } from "../../interfaces";

import { Button } from "../Button/Button";

import "./VoiceControlsInstructionTable.css";

interface IVoiceControlsInstructionTableProps {
  commands: IVoiceCommandsProps;
  routes?: string[];
  enableNavigationControls: boolean;
  enableScrollingControls: boolean;
  isListening: boolean;
  startRecognition: () => void;
  setIsInstructionTableOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoiceControlsInstructionTable: FC<IVoiceControlsInstructionTableProps> =
  ({
    commands,
    enableNavigationControls,
    enableScrollingControls,
    routes,
    isListening,
    startRecognition,
    setIsInstructionTableOpened,
  }) => {
    return (
      <div className="instruction-table-box">
        <div className="instruction-table-modal">
          <div className="instruction-table-modal-header">
            <p className="instruction-table-modal-header-heading">
              Voice Controls Commands Table
            </p>
            <Button
              className="button-instruction-table-close"
              faIcon={faClose}
              onClick={(): void => {
                setIsInstructionTableOpened(false);
                toast.info("Closed Instruction Table!");
                if (!isListening) {
                  startRecognition();
                }
              }}
            />
          </div>
          <div className="instruction-table-modal-body">
            <p className="instruction-table-subheading">
              These are the commands that you can use to control your website
              using voice
            </p>

            {/* stop recognition commands */}

            <div className="instruction-table-row">
              <p className="instruction-table-row-heading">
                Stop Recognition Command
              </p>
              <table className=" instruction-table-t ">
                <thead className="instruction-table-thead">
                  <tr>
                    <th>Commands</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className="instruction-table-tbody">
                  <tr>
                    <td>
                      <p className="instruction-table-row-command">
                        stop taking commands
                      </p>
                    </td>
                    <td>
                      <p className="instruction-table-row-description">
                        Stop taking commands
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* open close commands table commands */}

            <div className="instruction-table-row">
              <p className="instruction-table-row-heading">
                Open/Close Commands Table Commands
              </p>
              <table className=" instruction-table-t ">
                <thead className="instruction-table-thead">
                  <tr>
                    <th>Commands</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody className="instruction-table-tbody">
                  <tr>
                    <td>
                      <p className="instruction-table-row-command">
                        open commands table
                      </p>
                      <p className="instruction-table-row-command">
                        open command table
                      </p>
                      <p className="instruction-table-row-command">
                        open instruction table
                      </p>
                      <p className="instruction-table-row-command">
                        close commands table
                      </p>
                      <p className="instruction-table-row-command">
                        close command table
                      </p>
                      <p className="instruction-table-row-command">
                        close instruction table
                      </p>
                    </td>
                    <td>
                      <p className="instruction-table-row-description">
                        close or open commands table when you are recognizing
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* navigation commands */}

            {enableNavigationControls && (
              <div className="instruction-table-row">
                <p className="instruction-table-row-heading">
                  Navigation Commands
                </p>
                <table className=" instruction-table-t ">
                  <thead className="instruction-table-thead">
                    <tr>
                      <th>Commands</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody className="instruction-table-tbody">
                    <tr>
                      <td>
                        {commands.navigation?.map(
                          (command: string, index: number) => (
                            <p
                              key={index * Math.random() * command.length}
                              className="instruction-table-row-command"
                            >
                              {command}
                            </p>
                          )
                        )}
                      </td>
                      <td>
                        <p className="instruction-table-row-description">
                          Navigate to a page or route
                        </p>
                        <p className="instruction-table-row-examples">
                          {commands.navigation?.map(
                            (command: string, index: number) => (
                              <>
                                {" "}
                                {command + " <__route_name___> page/route , "}
                              </>
                            )
                          )}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {enableScrollingControls && (
              <div className="instruction-table-row">
                <p className="instruction-table-row-heading">
                  Scrolling Commands
                </p>
                <table className=" instruction-table-t ">
                  <thead className="instruction-table-thead">
                    <tr>
                      <th>Commands</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody className="instruction-table-tbody">
                    <tr>
                      <td>
                        {commands.scrolling?.map(
                          (command: string, index: number) => (
                            <p
                              key={index * Math.random() * command.length}
                              className="instruction-table-row-command"
                            >
                              {command}
                            </p>
                          )
                        )}
                      </td>
                      <td>
                        <p className="instruction-table-row-description">
                          control scrolling using voice control
                        </p>
                        <p className="instruction-table-row-examples">
                          {commands.scrolling?.map(
                            (command: string, index: number) => (
                              <>
                                {" "}
                                {command +
                                  " <__number___> percent/pixel/px/% , "}
                              </>
                            )
                          )}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

export default VoiceControlsInstructionTable;
