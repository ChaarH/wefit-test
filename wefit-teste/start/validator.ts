import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  required: 'O {{ field }} é necessário',
  string: 'O campo {{ field }} deve ser uma texto',
  email: 'O e-mail informado não é válido',
  minLenght: 'O {{ field }} deve conter ao menos {{ value }} caracteres',
  exists: 'Nada',
  unique: 'Existe',
})
