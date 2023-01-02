import { ValueObject } from '../value-object';

export abstract class Id<T = any> implements ValueObject {
  #id: T;

  get id(): T {
    return this.#id;
  }

  protected constructor(id: T) {
    if (id === null || id === undefined) {
      throw new Error('Id cannot be null or undefined');
    }
    this.#id = id;
  }

  equals(vo: Id<T>): boolean {
    return vo instanceof Id && this.id === vo.id;
  }

  toJSON(): T {
    return this.id;
  }
}
