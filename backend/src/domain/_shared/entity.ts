import { Id } from './value-object/id.vo';
import { UUID4 } from './value-object/uuid4.vo';

export interface EntityFields {
  id?: Id;
  created_at?: Date;
  updated_at?: Date;
}

export abstract class Entity<T extends EntityFields> {
  id: Id;
  created_at: Date;
  updated_at: Date;

  validate() {
    if (!(this.id instanceof Id)) throw new Error('Invalid id');
    if (!(this.created_at instanceof Date))
      throw new Error('Invalid created_at');
    if (!(this.updated_at instanceof Date))
      throw new Error('Invalid updated_at');

    return true;
  }

  protected constructor(fields: T) {
    fields.id ??= UUID4.generate();
    fields.created_at ??= new Date();
    fields.updated_at ??= fields.created_at;
    Object.assign(this, fields);
  }

  assign(fields: T) {
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) this[key] = value;
    }
    this.updated_at = new Date();
  }
}
