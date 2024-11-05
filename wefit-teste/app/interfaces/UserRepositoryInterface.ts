import User from '#models/user'

export default interface UserRepositoryInterface {
  getAll(): Promise<User>
  createUser(newUser: {}): Promise<boolean>
}
