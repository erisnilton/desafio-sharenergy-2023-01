import { ValidationError } from './../errors/validation-error';
import { randomUUID } from 'crypto';
import { inspect } from 'util';
import { Id } from './id.vo';

export class UUID4 extends Id<string> {
  static generate(): UUID4 {
    return new UUID4(randomUUID());
  }

  static of(id: string): UUID4 {
    if (
      !id.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )
    ) {
      throw ValidationError.of(`Invalid UUID4: ${id}`);
    }
    return new UUID4(id);
  }

  [inspect.custom](_, options): string {
    return options.stylize(
      `${this.constructor.name}(${this.value})`,
      'special',
    );
  }
}
