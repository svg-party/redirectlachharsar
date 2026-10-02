export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetDomain = "https://lachharsar.mywire.org"; 
    const destination = `${targetDomain}${url.pathname}${url.search}`;

    return new Response(null, {
      status: 301,
      statusText: "Moved Permanently",
      headers: {
        "Location": destination,
      },
    });
  },
};
