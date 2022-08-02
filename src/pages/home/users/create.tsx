import { FormEvent, useState } from 'react';

interface IUserForm {
  name: string,
  email: string
}
export default function UserForm () {
  const [user, setUser] = useState<IUserForm>({
    name: 'user-name',
    email: 'user@ex.com'
  });
  function handleSubmit (e) {
    //
    e.preventDefault();
    const data = new FormData(e.target);
    data.forEach(
      item => {
        console.log(item);
      }
    );
  }
  return <form onSubmit={handleSubmit} name={'user'}>
    <input name={'name'} value={user?.name}/>
    <input name={'email'} value={user?.email}/>
    <button type={'submit'}>sm</button>
  </form>;
}
