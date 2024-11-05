import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Role from '#models/role'
import type { HasOne } from '@adonisjs/lucid/types/relations'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare roleId: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare cpf: string

  @column()
  declare cnpj: string

  @column()
  declare mobilePhone: string

  @column()
  declare phone: string

  @column()
  declare addressCode: string

  @column()
  declare addressStreet: string

  @column()
  declare neighborhood: string

  @column()
  declare publicArea: string

  @column()
  declare complement: string

  @column()
  declare addressNumber: string

  @column()
  declare city: string

  @column()
  declare district: string

  @column()
  declare state: string

  @column()
  declare terms: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // @hasOne(() => Role, { localKey: 'roleId' })
  // declare role: HasOne<typeof Role>

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
