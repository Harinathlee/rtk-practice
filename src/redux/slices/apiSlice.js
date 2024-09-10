import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "postsapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    //end point to fetch all posts
    getPosts: builder.query({
      query: () => "/posts",
    }),
    //end point to fetch all userss
    getUsers: builder.query({
      query: () => "/users",
    }),
    //end point to add post
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetUsersQuery, useAddPostMutation } = apiSlice;

/*
 *This slice will use the rtk query to fetch data from api and create endpoint to access or update the data from react
 */
