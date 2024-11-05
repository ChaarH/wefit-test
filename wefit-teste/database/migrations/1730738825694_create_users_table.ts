import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.string('cpf').nullable()
      table.string('cnpj').nullable()

      table.integer('role_id').unsigned().notNullable().references('id').inTable('roles')
      table.string('mobile_phone').nullable()
      table.string('phone').nullable()

      table.string('address_code')
      table.string('address_street').nullable()
      table.string('neighborhood').nullable()
      table.string('public_area').nullable()
      table.string('complement').nullable()
      table.string('address_number').nullable()
      table.string('city').nullable()
      table.string('district').nullable()
      table.string('state').nullable()

      table.boolean('terms')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
