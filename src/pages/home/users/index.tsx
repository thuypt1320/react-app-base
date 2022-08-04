/* eslint-disable react/prop-types */
import {
  allConnect,
  subscribe,
  userSelector
} from 'src/redux/stores';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { updateState } from 'src/utils/updateState';

function Users ({
  data,
  getList,
  getDetail
}) {
  const [users, setUsers] = useState(data);
  const navigator = useNavigate();

  useEffect(() => {
    getList();
    subscribe(() => {
      setUsers(userSelector);
      updateState(users);
    });
  }, [data]);

  return (
    <div>
      <button onClick={getList}>fetch</button>
      <ul>
        {users?.data?.map(
          (user, index) => (
            <li key={index}>
              <a onClick={() => {
                getDetail(user.id);
                subscribe(() => {
                  setUsers(userSelector);
                  updateState(users);
                });
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

export default allConnect(Users);
