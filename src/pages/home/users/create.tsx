import { formValue } from 'src/utils/formValue';
import {
  subscribe,
  userConnect,
  UserConnectProps,
  userSelector
} from 'src/redux/stores';
import { useState } from 'react';
import { updateState } from 'src/utils/updateState';

function UserForm ({
  data,
  create
}: UserConnectProps) {
  const [users, setUsers] = useState(data);

  function handleSubmit (e) {
    e.preventDefault();
    create(formValue(e));
    subscribe(() => {
      setUsers(userSelector);
    });
    updateState(users);
  }

  return <div>
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
    {JSON.stringify(users)}
  </div>;
}

export default userConnect(UserForm);
