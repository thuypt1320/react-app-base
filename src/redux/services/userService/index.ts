import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from 'src/types';

export type UserResponse = User[]

interface UserForm {
  username: string,
  email: string,
}
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['UsersResponse', 'User'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
      providesTags: ['UsersResponse']
    }),
    getUserById: build.query({
      query: (id: string) => `users/${id}`,
      providesTags: ['User']
    }),
    updateUser: build.mutation({
      query: ({
        id,
        ...body
      }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body
      })
    }),
    createUser: build.mutation({
      query: (body: UserForm) => ({
        url: 'users',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation
} = userApi;
