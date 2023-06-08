import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "auth_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["auth_api"],
  endpoints: (builder) => ({
    // login
    userLogin: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth_api"],
    }),
    // register
    userRegister: builder.mutation({
      query: (user) => ({
        url: "register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth_api"],
    }),
    //   userLogout
    userLogout: builder.mutation({
      query: (token) => ({
        url: "user-logout",
        method: "POST",
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["auth_api"],
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation ,useUserLogoutMutation } = AuthApi;
