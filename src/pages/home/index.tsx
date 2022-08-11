import 'src/App.css';
import { LayoutItem } from 'src/components/organisms/layout';
import { Table } from 'src/components/atoms/table';
import { useFetchUserList } from 'src/hooks/use_fetch_user_list';

function Home () {
  const { data } = useFetchUserList();

  return (
    <LayoutItem type={'layout-main'} style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Table data={data}/>
    </LayoutItem>
  );
}
export default Home;
