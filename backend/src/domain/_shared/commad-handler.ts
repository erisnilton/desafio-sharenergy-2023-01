export abstract class CommandData {}

export interface CommandHandler<T extends CommandData, R = any> {
  execute(command: T): Promise<R>;
}
