import { createUserValidator } from '#validators/User/StoreUserValidator'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import UserRepository from '../repositories/UserRepository.js'

@inject()
export default class UsersController {
  public userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async getAll({ request, response }: HttpContext) {
    try {
      const page = request.input('page', 1)
      const users = await this.userRepository.getAll(page)

      if (!users) {
        throw new Error('Não foi possível carregar os registros!')
      }

      return {
        status: response.ok,
        data: users,
      }
    } catch (error) {
      return { status: response.badRequest, message: error.message }
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const data = await createUserValidator.validate(request.all())
      const createNewUser = await this.userRepository.createUser(data)

      if (!createNewUser) {
        throw new Error('Erro ao cadastrar!')
      }

      return {
        status: response.ok,
        data: createNewUser,
      }
    } catch (error) {
      return { status: error.status, message: error.messages }
    }
  }
}
