import User from '#models/user'
import UserRepositoryInterface from '../interfaces/UserRepositoryInterface.js'

export default class UserRepository implements UserRepositoryInterface {
  async getAll(): Promise<any> {
    return await User.all()
  }

  async createUser(newUser: {}): Promise<boolean> {
    const user = await User.create(newUser)
    return Promise.resolve(user.$isPersisted)
  }
}
