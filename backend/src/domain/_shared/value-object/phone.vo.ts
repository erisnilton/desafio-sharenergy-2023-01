import { inspect } from 'util';
import { ValueObject } from '../value-object';
export class Phone implements ValueObject {
  #value: string;
  protected constructor(phone: string) {
    this.#value = phone;
  }
  get value(): string {
    return this.#value;
  }
  equals(vo: Phone): boolean {
    return vo instanceof Phone && this.value === vo.value;
  }
  toJSON(): string {
    return this.value;
  }
  toString(): string {
    if (this.#value.length === 10) {
      return this.#value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }
    return this.#value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }

  [inspect.custom](_, options) {
    return options.stylize(
      `${this.constructor.name}(${this.toString()})`,
      'special',
    );
  }

  static of(phone: string) {
    if (!phone) throw new Error('Phone is required');
    phone = phone.replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 11) {
      throw new Error('Phone is invalid');
    }
    return new Phone(phone);
  }
}
