import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === 'production' ?  'http://localhost:3001/' : 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`
        })
    })
})

export const {useGetPostsQuery} = postsApi