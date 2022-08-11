import { useForm } from 'react-hook-form';
import { useFetchUserDetail } from 'src/hooks/use_fetch_user_detail';
import { useMutateUser } from 'src/hooks/use_mutate_user';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { LayoutItem } from 'src/components/organisms/layout';

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

  if (loading) {
    return <LayoutItem type={'layout-main'} style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>loading </LayoutItem>;
  }

  return (
    <LayoutItem type={'layout-main'}>
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
    </LayoutItem>
  );
}

export default User;
