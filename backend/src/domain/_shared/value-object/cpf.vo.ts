import { ValueObject } from '../value-object';
import { inspect } from 'util';

export class Cpf implements ValueObject {
  #value: string;

  protected constructor(cpf: string) {
    this.#value = cpf;
  }

  get value(): string {
    return this.#value;
  }

  get formatted() {
    return this.#value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

  static isValid(value: string): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    value = value.replace(/[^\d]+/g, '');

    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }

    const values = value.split('').map((el) => +el);
    const rest = (count: number) =>
      ((values
        .slice(0, count - 12)
        .reduce((soma, el, index) => soma + el * (count - index), 0) *
        10) %
        11) %
      10;

    return rest(10) === values[9] && rest(11) === values[10];
  }

  equals(vo: Cpf): boolean {
    return vo instanceof Cpf && this.value === vo.value;
  }

  toJSON(): string {
    return this.value;
  }

  [inspect.custom](_, options) {
    return options.stylize(
      `${this.constructor.name}(${this.formatted})`,
      'special',
    );
  }

  static of(cpf: string) {
    cpf = cpf.replace(/\D/g, '');

    if (!Cpf.isValid(cpf)) {
      throw new TypeError('Invalid cpf!');
    }

    return new Cpf(cpf);
  }
}
