"use client"
// RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// @ts-ignore
import Client from 'predicthq'

// Config
import { BASE_URL } from '../config';

// Tags
export const TAGS = ['USER'];


const client = new Client({access_token: 'TCM4O17f2Kd7JrmkWMkQdNuOQYrId7-SaaL7HCmW'})


// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token: string | null = null;
    // if (token) {
      headers.set('Authorization', `Bearer TCM4O17f2Kd7JrmkWMkQdNuOQYrId7-SaaL7HCmW`);
    // }
    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const baseAPI = createApi({
  reducerPath: 'api',
  // baseQuery: baseQueryWithRetry,
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
