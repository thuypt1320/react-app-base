import { applyMiddleware } from 'redux';
import { userMW } from 'src/redux/middleware/user_middleware';
import { authMW } from 'src/redux/middleware/auth_middleware';
import thunk from 'redux-thunk';
export const middleware = applyMiddleware(userMW, authMW, thunk);
