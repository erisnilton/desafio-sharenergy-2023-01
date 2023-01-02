export abstract class Command {}

export interface CommandHandler<T extends Command, R = any> {
  execute(command: T): Promise<R>;
}
