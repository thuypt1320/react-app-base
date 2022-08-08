import {
  subscribe,
  userConnect,
  UserConnectProps,
  userSelector
} from 'src/redux/stores';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { updateState } from 'src/utils/updateState';
import { formValue } from 'src/utils/formValue';
import { LogoutButton } from 'src/components/molecules/logout_button';

function User ({
  data,
  getDetail
}: UserConnectProps) {
  const [user, setUser] = useState(data.user);
  const { id } = useParams();
  useEffect(() => {
    getDetail(id);
    subscribe(() => {
      setUser(userSelector().user);
      updateState(user);
    });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue(e));
    setUser(formValue(e));
  };

  // *** name property is required to use FormData
  return (
    <div>
      <LogoutButton/>
      <form onSubmit={handleSubmit} name={'update'}>
        <div>
          <label>Id: </label>
          <input name="id" defaultValue={user?.id}/>
        </div>
        <div>
          <label>Name: </label>
          <input name="name" defaultValue={user?.name}/>
        </div>
        <div>
          <label>Email: </label>
          <input name="email" defaultValue={user?.email}/>
        </div>
        <button type={'submit'}>ud</button>
      </form>

      ----
      <p>Id: {user?.id}</p>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default userConnect(User);
