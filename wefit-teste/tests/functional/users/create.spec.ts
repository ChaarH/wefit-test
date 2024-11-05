import { test } from '@japa/runner'
import UserDto from '../../../app/dtos/user.js'
import { DateTime } from 'luxon'

test.group('Users create', () => {
  test('create a new user', async ({ client }) => {
    const user: UserDto = {
      id: 1,
      fullName: 'Carlos Henrique de Carvalho Aires',
      email: 'carlos.teste1@gmail.com',
      roleId: 1,
      password: '86462746598',
      cpf: '09762918091',
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

    const response = await client.post('/users').json(user)

    response.assertStatus(200)
    response.assertBodyContains({
      data: true,
    })
  })
})
