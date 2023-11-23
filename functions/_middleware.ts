import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Lead Recieved", email: "bfwetmore@gmail.com" }],
    },
  ],
  from: { name: "Leads", email: "lead@approvedheatingandcooling.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});