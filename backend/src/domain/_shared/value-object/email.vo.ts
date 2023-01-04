import { ValidationError } from './../errors/validation-error';
import { inspect } from 'util';
import { ValueObject } from '../value-object';
export class Email implements ValueObject {
  #value: string;
  protected constructor(email: string) {
    this.#value = email;
  }
  get value(): string {
    return this.#value;
  }
  equals(vo: Email): boolean {
    return vo instanceof Email && this.value === vo.value;
  }
  toJSON(): string {
    return this.value;
  }
  toString(): string {
    return this.#value;
  }
  static of(email: string) {
    if (!email) throw ValidationError.of('Email is required');
    if (
      !email.match(
        /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i,
      )
    ) {
      throw ValidationError.of('Email is invalid');
    }
    return new Email(email);
  }

  [inspect.custom](_, options) {
    return options.stylize(
      `${this.constructor.name}(${this.toString()})`,
      'special',
    );
  }
}
