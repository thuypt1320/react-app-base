import { useGetUsersQuery } from 'src/redux-toolkit/services/user_service';
import { stores } from 'src/redux/stores';

export default function Users () {
  const { data: users } = useGetUsersQuery({});
  return (
    <div>
      <ul>
        {users?.map(
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
      <p>Id: {stores.getState().auth?.id}</p>
      <p>Name: {stores.getState().auth?.name}</p>
      <p>Email: {stores.getState().auth?.email}</p>
    </div>
  );
}
