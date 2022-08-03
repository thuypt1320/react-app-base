import { authSelector, stores, userSelector } from 'src/redux/stores';
import { useSelector } from 'react-redux';
import { GET_LIST } from 'src/redux/types/user_action_types/user_action_types';

export default function Users () {
  const data = useSelector(userSelector);
  const authData = useSelector(authSelector);

  return (
    <div>
      {JSON.stringify(stores.getState().user)}
      <button onClick={() => stores.dispatch({ type: GET_LIST })}>fetch</button>
      <ul>
        {data?.data?.map(
          (user, index) => (
            <li key={index}>
              <a href={`/users/${user.id}`}>
                {user.name} - {user.email}
              </a>
            </li>
          )
        )}
      </ul>

      ----
      <p>Id: {authData?.data.id}</p>
      <p>Name: {authData?.data.name}</p>
      <p>Email: {authData?.data.email}</p>
    </div>
  );
}
