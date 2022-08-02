import { useParams } from 'react-router';
import {
  useGetUserByIdQuery
} from 'src/redux-toolkit/services/user_service';

export default function User () {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);

  return (
    <div>
      <p>Id: {data?.id}</p>
      <div>
        <p>Id: {data?.id}</p>
        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>
      </div>
    </div>
  );
}
