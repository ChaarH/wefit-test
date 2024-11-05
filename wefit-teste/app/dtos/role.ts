import { BaseModelDto } from '@adocasts.com/dto/base'
import Role from '#models/role'

export default class RoleDto extends BaseModelDto {
  declare id: number
  declare role: string
  declare createdAt: string
  declare updatedAt: string

  constructor(role?: Role) {
    super()

    if (!role) return
    this.id = role.id
    this.role = role.role
    this.createdAt = role.createdAt.toISO()!
    this.updatedAt = role.updatedAt.toISO()!
  }
}