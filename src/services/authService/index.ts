import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['User', 'ICredential'],
  endpoints: (build) => ({
    login: build.mutation({
      query: () => ({
        url: 'login',
        method: 'POST'
      }),
      invalidatesTags: ['ICredential']
    }),
    getProfile: build.query({
      query: () => 'profile',
      providesTags: ['User']
    }),
    logout: build.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST'
      })
    })
  })
});

export const {
  useLoginMutation,
  useGetProfileQuery,
  useLogoutMutation
} = authApi;
