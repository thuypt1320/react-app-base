import { LayoutItem } from 'src/components/organisms/layout';
import { LogoutButton } from 'src/components/molecules/logout_button';
import { useAuth } from 'src/hooks/use_auth';
export const Header = () => {
  const { data } = useAuth();
  return (
    <LayoutItem type={'layout-header'}>
      <LayoutItem type={'layout-header-left'}>
        <a href={'/users'}>Users</a>
        <p style={{ paddingRight: '10px' }}/>
        <a href={'/users/create'}>Create</a>
      </LayoutItem>
      <LayoutItem type={'layout-header-right'}>
        Name: {data?.user?.name}
        &nbsp;&nbsp;&nbsp;
        <LogoutButton/>
      </LayoutItem>
    </LayoutItem>
  );
};
