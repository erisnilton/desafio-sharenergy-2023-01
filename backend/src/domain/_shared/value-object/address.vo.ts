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
    return `${this.value.street}, ${this.value.number} - ${
      this.value.neighborhood
    }, ${this.#value.zipCode}, ${this.value.city} - ${this.value.state}, ${
      this.value.country
    }`;
  }

  static of(address: AddressFields) {
    if (!address) throw new Error('Address is required');
    if (!address.street) throw new Error('Street is required');
    if (!address.number) throw new Error('Number is required');
    if (!address.neighborhood) throw new Error('Neighborhood is required');
    if (!address.city) throw new Error('City is required');
    if (!address.state) throw new Error('State is required');
    if (!address.country) throw new Error('Country is required');
    if (!address.zipCode) throw new Error('ZipCode is required');

    return new Address(address);
  }

  [inspect.custom](_, options) {
    return options.stylize(
      `${this.constructor.name}(${this.toString()})`,
      'special',
    );
  }
}
