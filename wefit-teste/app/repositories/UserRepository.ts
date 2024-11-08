import User from '#models/user'
import UserRepositoryInterface from '../interfaces/UserRepositoryInterface.js'

export default class UserRepository implements UserRepositoryInterface {
  async getAll(page: number): Promise<any> {
    const limit = 100
    return await User.query().preload('role').orderBy('createdAt', 'desc').paginate(page, limit)
  }

  async createUser(newUser: {}): Promise<boolean> {
    const user = await User.create(newUser)
    return Promise.resolve(user.$isPersisted)
  }
}
