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
  commandsList.scrolling = [
    ...DEFAULT_SCROLLING_COMMANDS,
    ...(commandsList.scrolling || []),
  ];
  console.log(commandsList);
  Object.keys(commandsList).forEach((cType: string) => {
    const commandName = commandsList[cType.toLowerCase()].find(
      (cmd: string) => command.toLowerCase().includes(cmd.toLowerCase()) && cmd
    );
    cmdName = commandName;
    console.log(commandName);
    console.log(cType);

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
