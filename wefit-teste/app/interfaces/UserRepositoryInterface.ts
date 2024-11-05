import User from '#models/user'

export default interface UserRepositoryInterface {
  getAll(page: number): Promise<User>
  createUser(newUser: {}): Promise<boolean>
}
