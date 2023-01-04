export class DomainError extends Error {
  name = 'DomainError';
  constructor(message: string, readonly cause?: any) {
    super(message);
  }
}
