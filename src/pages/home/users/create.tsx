import { useState } from 'react';
import { objFD } from 'src/utils/formDataToObj';

interface IUserForm {
  name: string,
  email: string
}
export default function UserForm () {
  const [user, setUser] = useState<IUserForm>();

  function handleSubmit (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formObj = {};

    formData.forEach((value, key) => {
      const item = objFD(key, value);
      formObj = {
        ...formObj,
        ...item
      };
    });

    setUser(formObj as IUserForm);
  }

  return <form onSubmit={handleSubmit} name={'user'}>
    <input name={'name'} defaultValue={user?.name}/>
    <input name={'email'} defaultValue={user?.email}/>
    <button type={'submit'}>sm</button>
  </form>;
}
