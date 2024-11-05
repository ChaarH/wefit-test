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

  /**
   * This function retrieves all users from a repository and returns them with appropriate status codes
   * and error handling.
   * @param {HttpContext}  - The `getAll` function is an asynchronous function that retrieves all users
   * from a repository and returns a response object with the status and data. Here are the parameters
   * used in the function:
   * @returns The `getAll` method is returning an object with either a `status` of `response.ok` and
   * the `data` containing the users if the retrieval is successful, or a `status` of
   * `response.badRequest` and a `message` containing the error message if an error occurs during the
   * retrieval process.
   */
  async getAll({ response }: HttpContext) {
    try {
      const users = await this.userRepository.getAll()

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

  /**
   * The function `store` handles the creation of a new user by validating the request data and storing
   * it in the database, returning the result or an error message.
   * @param {HttpContext}  - The `store` method in the code snippet is an asynchronous function that
   * handles the creation of a new user. Here's a breakdown of the parameters used in the function:
   * @returns The `store` method in the code snippet is returning an object with either a success
   * response or an error response.
   */
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
