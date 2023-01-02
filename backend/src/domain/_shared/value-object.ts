export interface ValueObject {
  equals(vo: ValueObject): boolean;
  toJSON(): any;
}
