import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ContactApi = createApi({
  reducerPath: "contactApiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["contactApiPath"],
  endpoints: (builder) => ({
    // create new contact
    createContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: "contact",
        method: "POST",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApiPath"],
    }),
    // edit contact
    editContact: builder.mutation({
      query: ({ contact, token, id }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: contact,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApiPath"],
    }),
    // delete single contact
    deleteContact: builder.mutation({
      query: ({ token, id }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApiPath"],
    }),
    // get all contacts
    getContacts: builder.query({
      query: (token) => ({
        url: "contact",
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApiPath"],
    }),

    // change Password
    changePassword: builder.mutation({
      query: ({ passwordData, token }) => ({
        url: "change-password",
        method: "POST",
        body: passwordData,
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["contactApiPath"],
    }),
    // get profile
    getProfile: builder.query({
      query: (token) => ({
        url: "user-profile",
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApiPath"],
    }),
    // get single contact
    getSingleProduct: builder.query({
      query: ({ token, id }) => ({
        url: `contact/${id}`,
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApiPath"],
    }),
    paginatePages: builder.query({
      query: ({ token, page }) => ({
        url: `contact?page=${page}`,
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApiPath"],
    }),
    searchByName: builder.query({
      query: ({ token, search, page }) => ({
        url: `contact?keyword=${search}&page=${page}`,
        headers: { authorization: ` Bearer ${token}` },
      }),
      providesTags: ["contactApiPath"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useEditContactMutation,
  useDeleteContactMutation,
  useChangePasswordMutation,
  useGetProfileQuery,
  useGetSingleProductQuery,
  usePaginatePagesQuery,
  useSearchByNameQuery,
} = ContactApi;