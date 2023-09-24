import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === 'production' ?  'https://omni-blog-server-401a3abbae8e.herokuapp.com/' : 'http://localhost:3001/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`
        })
    })
})

export const {useGetPostsQuery, useGetPostQuery} = postsApi