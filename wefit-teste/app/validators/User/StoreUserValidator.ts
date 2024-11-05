import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim(),
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    roleId: vine.number().exists(async (db, value) => {
      const role = await db.from('roles').where('id', value).first()
      return role
    }),
    cpf: vine
      .string()
      .maxLength(11)
      .minLength(11)
      .exists(async (db, value) => {
        const cpf = await db.from('users').where('cpf', value).first()
        return !cpf
      })
      .optional()
      .requiredIfMissing('cnpj'),
    cnpj: vine
      .string()
      .maxLength(14)
      .minLength(14)
      .exists(async (db, value) => {
        const cnpj = await db.from('users').where('cnpj', value).first()
        return !cnpj
      })
      .optional()
      .requiredIfMissing('cpf'),
    mobilePhone: vine.string(),
    phone: vine.string(),
    addressCode: vine.string(),
    addressStreet: vine.string(),
    neighborhood: vine.string(),
    publicArea: vine.string(),
    complement: vine.string(),
    addressNumber: vine.string(),
    city: vine.string(),
    district: vine.string(),
    state: vine.string(),
    terms: vine.accepted(),
  })
)

vine.messagesProvider = new SimpleMessagesProvider({
  required: 'O campo {{ field }} é obrigatório',
  terms: 'O campo termos de uso deve ser aceito',
  email: 'O e-mail informado é inválido',
  exists: 'Existe',
})
