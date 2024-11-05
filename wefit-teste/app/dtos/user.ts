import { BaseModelDto } from '@adocasts.com/dto/base'
import User from '#models/user'
import { DateTime } from 'luxon'

export default class UserDto extends BaseModelDto {
  declare id?: number
  declare roleId: number
  declare fullName: string | null
  declare email: string
  declare password: string
  declare cpf: string
  declare cnpj: string
  declare mobilePhone: string
  declare phone: string
  declare addressCode: string
  declare addressStreet: string
  declare neighborhood: string
  declare publicArea: string
  declare complement: string
  declare addressNumber: string
  declare city: string
  declare district: string
  declare state: string
  declare terms: boolean
  declare createdAt: DateTime
  declare updatedAt: DateTime | null

  constructor(user?: User) {
    super()

    if (!user) return
    this.id = user.id
    this.roleId = user.roleId
    this.fullName = user.fullName
    this.email = user.email
    this.password = user.password
    this.cpf = user.cpf
    this.cnpj = user.cnpj
    this.mobilePhone = user.mobilePhone
    this.phone = user.phone
    this.addressCode = user.addressCode
    this.addressStreet = user.addressStreet
    this.neighborhood = user.neighborhood
    this.publicArea = user.publicArea
    this.complement = user.complement
    this.addressNumber = user.addressNumber
    this.city = user.city
    this.district = user.district
    this.state = user.state
    this.terms = user.terms
    this.createdAt = DateTime.fromISO(user.createdAt.toString())
    this.updatedAt = user.updatedAt ? DateTime.fromISO(user.updatedAt.toString()) : null
  }
}
