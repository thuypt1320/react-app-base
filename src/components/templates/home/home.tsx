import { LayoutItem } from 'src/components/organisms/layout';
import { useFetchUserList } from 'src/hooks/use_fetch_user_list';
import { User } from 'src/types';
import { Table } from 'src/components/atoms/table';
import { useFetchUserDetail } from 'src/hooks/use_fetch_user_detail';
import { UserUpdate } from 'src/components/templates/home/components/user_update';

export const Home = () => {
  const { data } = useFetchUserList();
  const {
    data: user,
    getDetail
  } = useFetchUserDetail();

  return (
    <>
      <LayoutItem type={'layout-main'} style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Table
          data={data}
          onClickRow={(value: User) => {
            getDetail(value.id);
          }}
        />
      </LayoutItem>
      <UserUpdate user={user}/>
    </>
  );
};
