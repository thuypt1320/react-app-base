// type
enum AuthTypes {
  withoutAuth = 'withoutAuth',
  withAuth = 'withAuth'
}
// actions
interface AuthActions {
  type: AuthTypes,
  payload: boolean
}
// state
interface AuthState {
  status: boolean;
}
// reducer
export function authReducer (status: AuthState, action: AuthActions) {
  switch (action.type) {
    case AuthTypes.withAuth:
      return ({ status: true });
    case AuthTypes.withoutAuth:
      return ({ status: false });
  }
}
