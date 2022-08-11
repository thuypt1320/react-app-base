import { useNavigate } from 'react-router';
import { LogoutButton } from 'src/components/molecules/logout_button';
import { useFetchUserList } from 'src/hooks/use_fetch_user_list';
import { useFetchUserDetail } from 'src/hooks/use_fetch_user_detail';

function Users () {
  const {
    data,
    getList,
    loading
  } = useFetchUserList();
  const { getDetail } = useFetchUserDetail();
  const navigator = useNavigate();

  if (loading) return <div>loading </div>;
  return (
    <div>
      <button onClick={getList}>fetch</button>
      <LogoutButton/>

      <ul>
        {data?.map(
          (user, index) => (
            <li key={index}>
              <a onClick={() => {
                getDetail(user.id);
                navigator(`/users/${user.id}`);
              }}
              >
                {user.name} - {user.email}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Users;
