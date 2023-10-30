import { TAGS, baseAPI } from './base-api';

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<null, object>({
      query: () => ({
        url: "v1/events/",
        method: "GET",
      }),
      providesTags: ["Events"],
    }),
  }),
});

export const {
useGetEventsQuery
} = authAPI;
