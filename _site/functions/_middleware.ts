import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "ACME Support", email: "bfwetmore@gmail.com" }],
    },
  ],
  from: { name: "Enquiry", email: "contact@approvedheatingandcooling.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});