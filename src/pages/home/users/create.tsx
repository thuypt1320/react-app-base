import { LogoutButton } from 'src/components/molecules/logout_button';
import { Table } from 'src/components/atoms/table';
import { useForm } from 'react-hook-form';
import { useMutateUser } from 'src/hooks/use_mutate_user';
import { useFetchUserList } from 'src/hooks/use_fetch_user_list';

function UserForm () {
  const {
    register,
    handleSubmit
  } = useForm();

  const { create } = useMutateUser();
  const { data } = useFetchUserList();

  function handleUpdate (formValue) {
    create(formValue);
  }

  return <div>
    <LogoutButton/>

    <form onSubmit={handleSubmit(handleUpdate)} name={'user'}>
      <div>
        <label>name</label>
        <input {...register('name')} />
      </div>
      <div>
        <label>email</label>
        <input {...register('email')} />
      </div>
      <button type={'submit'}>sm</button>
    </form>
    <Table data={data}/>
  </div>;
}

export default UserForm;
