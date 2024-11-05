import { test } from '@japa/runner'

test.group('Users list', () => {
  test('get a list of users', async ({ client }) => {
    const response = await client.get('/users')

    response.assertStatus(200)
    response.assertBodyContains({
      data: [
        {
          id: 1,
          email: 'carlos.wecode@gmail.com',
        },
      ],
    })
  })
})
