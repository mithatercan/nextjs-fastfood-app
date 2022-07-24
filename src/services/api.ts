import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type LoginRequest = {
  password: string;
  email: string;
};
export type LoginResponse = {
  password: string | null;
  id: number;
  email: string;
};
export type useUserType = LoginResponse | null;
const baseUrl = 'http://localhost:3000/';

export const api = createApi({
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),

  tagTypes: ['user'],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/signin',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['user'],
    }),
    signup: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/api/auth/signup',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['user'],
    }),
    logOut: builder.mutation<void, void>({
      query: () => ({
        url: '/api/auth/logout',
        method: 'GET',
      }),
    }),
    useUser: builder.query<useUserType, void>({
      query: () => ({
        url: `/api/auth/me`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {
  useLoginMutation,
  useUseUserQuery,
  useSignupMutation,
  useLogOutMutation,
} = api;
