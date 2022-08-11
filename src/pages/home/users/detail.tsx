import { LogoutButton } from 'src/components/molecules/logout_button';
import { useForm } from 'react-hook-form';
import { useFetchUserDetail } from 'src/hooks/use_fetch_user_detail';
import { useMutateUser } from 'src/hooks/use_mutate_user';
import { useParams } from 'react-router';
import { useEffect } from 'react';

function User () {
  const { id } = useParams();
  const {
    data,
    loading
  } = useFetchUserDetail(id);
  const { update } = useMutateUser();

  const {
    register,
    handleSubmit,
    setValue
  } = useForm();

  useEffect(() => {
    setValue('name', data?.name);
    setValue('email', data?.email);
  }, [data]);

  const handleUpdate = (formValue) => {
    update({
      ...formValue,
      id
    });
  };

  if (loading) return <div>loading </div>;

  return (
    <div>
      <LogoutButton/>
      <form onSubmit={handleSubmit(handleUpdate)} name={'update'}>
        <div>
          <label>Id: {data?.id}</label>
        </div>
        <div>
          <label>Name: </label>
          <input {...register('name')} />
        </div>
        <div>
          <label>Email: </label>
          <input {...register('email')} />
        </div>
        <button type={'submit'}>ud</button>
      </form>

      ----
      <p>Id: {data?.id}</p>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
  );
}

export default User;
