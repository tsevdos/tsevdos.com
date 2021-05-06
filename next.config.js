const redirects = require("./redirects");

module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return redirects;
  },
};
