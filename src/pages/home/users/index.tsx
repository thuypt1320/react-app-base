import { useGetUsersQuery } from 'src/redux/services/userService';

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
    </div>
  );
}
