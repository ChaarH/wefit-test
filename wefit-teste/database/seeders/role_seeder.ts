import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class RoleSeeder extends BaseSeeder {
  async run() {
    const roles = [
      {
        id: 1,
        role: 'ADMIN',
      },
      {
        id: 2,
        role: 'SELLER',
      },
      {
        id: 3,
        role: 'BUYER',
      },
    ]

    await Role.createMany(roles)
  }
}
