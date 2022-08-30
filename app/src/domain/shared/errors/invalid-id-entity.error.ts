export class InvalidIdEntity extends Error {
  constructor() {
    super('Invalid Id Entity');
    this.name = 'invalid_id_entity'
  }
}
