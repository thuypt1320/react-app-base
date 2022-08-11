import { useNavigate } from 'react-router';
import { useFetchUserList } from 'src/hooks/use_fetch_user_list';
import { useFetchUserDetail } from 'src/hooks/use_fetch_user_detail';
import { LayoutItem } from 'src/components/organisms/layout';

function Users () {
  const {
    data,
    loading
  } = useFetchUserList();
  const { getDetail } = useFetchUserDetail();
  const navigator = useNavigate();

  if (loading) {
    return <LayoutItem type={'layout-main'} style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>loading </LayoutItem>;
  }

  return (
    <LayoutItem type={'layout-main'}>
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
    </LayoutItem>
  );
}

export default Users;
