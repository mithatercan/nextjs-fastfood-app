import type { Category, Company } from '@prisma/client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type LoginRequest = {
  password: string
  email: string
}
export type LoginResponse = {
  password: string | null
  id: number
  email: string
  company?: Company
}
export type useUserType = LoginResponse | null
const baseUrl = 'http://localhost:3000/'

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
    createCompany: builder.mutation({
      query: (companyInfo) => ({
        url: 'api/company/add-company',
        method: 'POST',
        body: companyInfo,
      }),
      invalidatesTags: ['user'],
    }),
    getAllCategories: builder.query<Category[], void>({
      query: () => ({
        url: 'api/category/getAllCategories',
        method: 'GET',
      }),
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: 'api/category/createCategory',
        method: 'POST',
        body: category,
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: 'api/product/getAllProducts',
        method: 'GET',
      }),
    }),
    removeCategory: builder.mutation({
      query: (id) => ({
        url: 'api/category/removeCategory',
        method: 'POST',
        body: id,
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: 'api/product/createProduct',
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: 'api/product/deleteProduct',
        method: 'POST',
        body: id,
      }),
    }),
    editProduct: builder.mutation({
      query: (data) => ({
        url: 'api/product/editProduct',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useUseUserQuery,
  useSignupMutation,
  useLogOutMutation,
  useCreateCompanyMutation,
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetAllProductsQuery,
  useRemoveCategoryMutation,
} = api
