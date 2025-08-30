import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["user"],
    }),
    sendOTP: builder.mutation({
      query: (otpInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: otpInfo,
      }),
    }),
    verifyOTP: builder.mutation({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useUserLoginMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useGetMeQuery,
} = authApi;
