import { rest } from 'msw';
import { storageService } from 'src/services';
import { keyStoragesCredential } from 'src/services/storageService/keyStorages';
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
        user: {
          name: 'user-name',
          email: 'user@ex.com'
        }
      })
    );
  }),

  rest.post('/logout', (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  })
];
