
const nextConfig = {
  i18n: {
    locales: ["en-US", "nl-NL", 'de-de'],
    defaultLocale: "en-US",
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/us/en/:path*",
          destination: "/en-US/:path*",
        },
        {
          source: "/nl/nl/:path*",
          destination: "/nl-NL/:path*",
        },
        {
          source: "/de/de/:path*",
          destination: "/de-de/:path*",
        },
      ]
    }
  },
}

module.exports = nextConfig