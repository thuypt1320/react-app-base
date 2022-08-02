import { rest } from 'msw';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storage_service/key_storages';
export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          name: 'user-name'
        },
        access_token: 'access_token'
      })
    );
  }),

  rest.get('/profile', (req, res, ctx) => {
    const credential = storageService.get(keyStoragesCredential);

    if (!credential || !credential.access_token) {
      return res(
        ctx.status(403)
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        name: 'user-name',
        email: 'user@ex.com',
        id: 'user-id'
      })
    );
  }),

  rest.post('/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({})
    );
  }),

  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'user-name',
          email: 'user@ex.com',
          id: 'user-id'
        },
        {
          name: 'user-name-1',
          email: 'user1@ex.com',
          id: 'user-id-1'
        }
      ]
      )
    );
  }),

  rest.get('/users/:id', (req, res, ctx) => {
    const ls = [
      {
        name: 'user-name',
        email: 'user@ex.com',
        id: 'user-id'
      },
      {
        name: 'user-name-1',
        email: 'user1@ex.com',
        id: 'user-id-1'
      }
    ];

    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json(ls.find(item => item.id === id))
    );
  }),

  rest.post('/users', (req, res, ctx) => {
    const {
      username,
      email
    } = req.params;

    return res(ctx.json({
      name: username,
      email
    }));
  }),

  rest.patch('/users/:id', (req, res, ctx) => {
    const {
      id,
      username
    } = req.params;

    return res(
      ctx.json({
        name: username,
        email: 'user@ex.com',
        id
      })
    );
  })
];
