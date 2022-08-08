import { formValue } from 'src/utils/formValue';
import {
  subscribe,
  userConnect,
  UserConnectProps,
  userSelector
} from 'src/redux/stores';
import { useEffect, useState } from 'react';
import { updateState } from 'src/utils/updateState';
import { LogoutButton } from 'src/components/molecules/logout_button';
import { Table } from 'src/components/atoms/table';

function UserForm ({
  data,
  create,
  getList
}: UserConnectProps) {
  const [users, setUsers] = useState(data);
  useEffect(() => {
    getList();
    subscribe(() => {
      setUsers(userSelector);
    });
    updateState(users);
  }, []);

  function handleSubmit (e) {
    e.preventDefault();
    create(formValue(e));
    subscribe(() => {
      setUsers(userSelector);
    });
    updateState(users);
  }

  return <div>
    <LogoutButton/>

    <form onSubmit={handleSubmit} name={'user'}>
      <div>
        <label>name</label>
        <input name={'name'} defaultValue={''}/>
      </div>
      <div>
        <label>email</label>
        <input name={'email'} defaultValue={''}/>
      </div>
      <button type={'submit'}>sm</button>
    </form>
    <Table data={users.data}/>
  </div>;
}

export default userConnect(UserForm);
