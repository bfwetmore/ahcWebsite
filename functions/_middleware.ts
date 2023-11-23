// import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

// export const onRequest: PagesFunction = mailChannelsPlugin({
//   personalizations: [
//     {
//       to: [{ name: "AHC", email: "bfwetmore@gmail.com" }],
//     },
//   ],
//   from: {
//     name: "New Lead",
//     email: "leads@approvedheatingandcooling.com",
//   },
//   respondWith: () => {
//     return new Response(
//       `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
//     );
//   },
// });

import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "AHC", email: "info@approvedheatingandcooling.com" }],
    },
  ],
  from: { name: "New Lead", email: "noreply@approvedheatingandcooling.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thankyou" },
    }),
});