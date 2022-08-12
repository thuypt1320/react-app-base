import { LayoutItem } from 'src/components/organisms/layout';
import { User } from 'src/types';
import { FC, useEffect, useState } from 'react';
import { useMutateUser } from 'src/hooks/use_mutate_user';
import { useForm } from 'react-hook-form';

interface UserUpdateProps {
  user?: User;
}

export const UserUpdate: FC<UserUpdateProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm();
  const [submitType, setSubmitType] = useState<'create' | 'update'>('update');

  const {
    create,
    update,
    remove
  } = useMutateUser();

  useEffect(() => {
    if (submitType === 'update') {
      setValue('name', user?.name);
      setValue('email', user?.email);
    }
    if (submitType === 'create') {
      setValue('name', '');
      setValue('email', '');
    }
  }, [submitType, user]);

  const updateState = () => submitType;

  const onSubmit = (formValue) => {
    if (formValue) {
      submitType === 'create' && create({
        ...formValue,
        id: user?.id
      });
      submitType === 'update' && update({
        ...formValue,
        id: user?.id
      });
    }
  };

  return (
    <LayoutItem type={'layout-note'}>
      <div>
        {submitType === 'create' && <button
          style={{ marginRight: '10px' }}
          onClick={() => {
            setSubmitType('update');
            updateState();
          }}>update
        </button>}
        {submitType === 'update' && <button
          style={{ marginRight: '10px' }}
          onClick={() => {
            setSubmitType('create');
            updateState();
          }}>create
        </button>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '10px' }}>
          {submitType === 'create' ? <p>create</p> : <p>Id: {user?.id}</p>}
          <div>
            <p>Name</p>
            <input {...register('name')}/>
          </div>
          <div>
            <p>Email</p>
            <input {...register('email')}/>
          </div>
        </div>
        <div>
          <button type={'submit'} style={{ marginRight: '10px' }}>Submit
          </button>
          {submitType === 'update' && <button
            onClick={() => {
              remove(user?.id);
            }}
          >
            delete
          </button>}
        </div>
      </form>
    </LayoutItem>
  );
};
