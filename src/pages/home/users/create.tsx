import { useForm } from 'react-hook-form';
import { useMutateUser } from 'src/hooks/use_mutate_user';
import { LayoutItem } from 'src/components/organisms/layout';

function UserForm () {
  const {
    register,
    handleSubmit
  } = useForm();

  const {
    create
  } = useMutateUser();

  function handleUpdate (formValue) {
    create(formValue);
  }

  return <LayoutItem type={'layout-main'}>
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
  </LayoutItem>;
}

export default UserForm;
