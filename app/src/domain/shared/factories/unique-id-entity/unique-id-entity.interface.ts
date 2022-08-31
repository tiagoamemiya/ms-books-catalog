export interface UniqueIdEntityInterface {
  validate(id: string): void;
  getUniqueId(): string;
}
