import { TAGS, baseAPI } from './base-api';

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<null, object>({
      query: ({params}:any) => ({
        url: "v1/events/?limit=10&offset=10",
        method: "GET",
        params:params
      }),
      providesTags: ["Events"],
    }),
  }),
});

export const {
useGetEventsQuery
} = authAPI;
