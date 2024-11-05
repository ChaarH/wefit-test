import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import UserDto from '../../app/dtos/user.js'
import { DateTime } from 'luxon'

export const UserFactory = factory

  .define(User, async ({ faker }) => {
    const random = faker.number.int({ min: 0, max: 1 })

    const ROLE_SELLER = 2
    const ROLE_BUYER = 3

    const user: UserDto = {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      roleId: random ? ROLE_SELLER : ROLE_BUYER,
      password: faker.string.uuid(),
      cpf: random ? faker.string.numeric({ length: 11 }) : '',
      cnpj: !random ? faker.string.numeric({ length: 14 }) : '',
      mobilePhone: faker.phone.number(),
      phone: faker.phone.number(),
      addressCode: faker.location.zipCode(),
      addressStreet: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      complement: 'Fundos',
      neighborhood: 'Centro',
      terms: true,
      publicArea: 'Fundos',
      addressNumber: faker.number.int().toString(),
      district: 'Centro',
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }

    return user
  })
  .build()
