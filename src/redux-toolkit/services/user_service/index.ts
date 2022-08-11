import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from 'src/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
      providesTags: ['User']
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
      }),
      invalidatesTags: ['User']
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation
} = userApi;
