import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import UserDto from '../../app/dtos/user.js'
import { DateTime } from 'luxon'

export default class UserSeeder extends BaseSeeder {
  async run() {
    const user: UserDto = {
      id: 1,
      fullName: 'Carlos Henrioque de Carvalho Aires',
      email: 'carlos.wecode@gmail.com',
      roleId: 1,
      password: '1212212',
      cpf: '12345678910',
      cnpj: '',
      mobilePhone: '35992663351',
      phone: '33322965',
      addressCode: '37470000',
      addressStreet: 'Avenida Principal',
      city: 'San Francisco',
      state: 'MG',
      complement: 'Fundos',
      neighborhood: 'Centro',
      terms: true,
      publicArea: 'Fundos',
      addressNumber: '100',
      district: 'Centro',
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }

    await User.create(user)
  }
}
