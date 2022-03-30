import { DEFAULT_SCROLLING_COMMANDS } from "../constants";

export interface ICommandType {
  commandType: string;
  cmd: string;
  cmdName: string;
}
export const checkCommandType = (
  commandsList: any,
  command: string
): ICommandType => {
  let cmdName: string = "",
    cmdType: string = "";
  Object.keys(commandsList).forEach((cType: string) => {
    if (cType === "scrolling") {
      commandsList[cType] = [
        ...commandsList[cType],
        ...DEFAULT_SCROLLING_COMMANDS,
      ];
    }
    const commandName = commandsList[cType.toLowerCase()].find(
      (cmd: string) => command.toLowerCase().includes(cmd.toLowerCase()) && cmd
    );
    cmdName = commandName;
    console.log(commandName);

    if (commandName) {
      cmdType = cType;
    }
  });

  return {
    commandType: cmdType,
    cmd: command,
    cmdName,
  };
};
