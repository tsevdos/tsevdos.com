import redirects from "./redirects";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return redirects;
  },
});
