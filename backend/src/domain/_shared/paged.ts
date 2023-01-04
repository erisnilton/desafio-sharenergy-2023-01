export interface PagedParams {
  offset: number;
  limit: number;
}

export class Paged<T> {
  constructor(
    readonly items: T[],
    readonly total: number,
    readonly offset: number,
    readonly limit: number,
  ) {}

  static of<T>(items: T[], total: number, pagination: PagedParams): Paged<T> {
    return new Paged(items, total, pagination.offset, pagination.limit);
  }

  static getParams(query: object): PagedParams {
    return {
      offset: Number(query['offset'] ?? 0),
      limit: Number(query['limit'] ?? 20),
    };
  }
}
