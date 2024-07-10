import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://netology-trainbooking.netoservices.ru";

export const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/' }),
  endpoints: (builder) => ({
    getUsers: builder.query ({
      query: (page) => `api/users?page=${page}`,
    }),
    getTrain: builder.query 
    ({
      query: (id) => `routes?${id}`,
    }),
    getWagon: builder.query 
    ({
      query: (id) => `routes/${id}/seats`,
    }),
    putOrder: builder.mutation
    ({
      query(data) {
        const {id, ...body} = data
        return {
          url: `/order`,
          method: 'POST',
          body
        }
      }
    }),
  }),
});


export const { useGetUsersQuery, useGetTrainQuery, useGetWagonQuery, usePutOrderMutation } = myApi;