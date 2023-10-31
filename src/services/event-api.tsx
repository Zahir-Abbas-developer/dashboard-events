import { TAGS, baseAPI } from './base-api';

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<null, object>({
      query: () => ({
        url: "v1/events/?limit=10&offset=10",
        method: "GET",
      }),
      providesTags: ["Events"],
    }),
  }),
});

export const {
useGetEventsQuery
} = authAPI;
