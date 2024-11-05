import User from '#models/user'
import { test } from '@japa/runner'

test.group('Users create', () => {
  test('create a new user', async ({ client }) => {
    const user: User = {
      id: 1,
      fullName: 'Carlos Henrioque de Carvalho Aires',
      email: 'carlos.teste2@gmail.com',
      roleId: 1,
      password: '86462746598',
      cpf: '01234567891',
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
    }

    const response = await client.post('/users').json(user)

    response.assertStatus(200)
    response.assertBodyContains({
      data: true,
    })
  })
})
