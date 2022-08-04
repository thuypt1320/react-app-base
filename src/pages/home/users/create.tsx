/* eslint-disable react/prop-types */
import { formValue } from 'src/utils/formValue';
import { userConnect } from 'src/redux/stores';

function UserForm ({
  create
}) {
  function handleSubmit (e) {
    e.preventDefault();
    create(formValue(e));
  }

  return <div>
    <form onSubmit={handleSubmit} name={'user'}>
      <div>
        <label>name</label>
        <input name={'name'}/>
      </div>
      <div>
        <label>email</label>
        <input name={'email'}/>
      </div>
      <button type={'submit'}>sm</button>
    </form>
  </div>;
}

export default userConnect(UserForm);
