import { ValidationError } from './../errors/validation-error';
import { inspect } from 'util';
import { ValueObject } from '../value-object';

export interface AddressFields {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  reference: string;
}

export class Address implements ValueObject {
  #value: AddressFields;

  protected constructor(address: AddressFields) {
    this.#value = address;
  }

  get value(): AddressFields {
    return this.#value;
  }

  equals(vo: Address): boolean {
    return (
      vo instanceof Address &&
      (this.value === vo.value || this.toString() === vo.toString())
    );
  }

  toJSON(): AddressFields {
    return this.value;
  }

  toString(): string {
    return `${this.value.street}, ${this.value.number}, ${
      this.value.neighborhood
    },${this.value.complement}, ${this.#value.zipCode}, ${this.value.city}, ${
      this.value.state
    }, ${this.value.country},${this.value.reference}`;
  }

  static of(address: AddressFields) {
    if (!address) throw ValidationError.of('Address is required');
    if (!address.street) throw ValidationError.of('Street is required');
    if (!address.number) throw ValidationError.of('Number is required');
    if (!address.neighborhood)
      throw ValidationError.of('Neighborhood is required');
    if (!address.city) throw ValidationError.of('City is required');
    if (!address.state) throw ValidationError.of('State is required');
    if (!address.country) throw ValidationError.of('Country is required');
    if (!address.zipCode) throw ValidationError.of('ZipCode is required');

    return new Address(address);
  }

  [inspect.custom](_, options) {
    return options.stylize(
      `${this.constructor.name}(${this.toString()})`,
      'special',
    );
  }
}
