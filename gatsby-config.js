const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const path = require("path")
const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "citizens.citydao.io",
    author: "Odysseas Lamtzidis",
    url: "https://citizens.citydao.io",
    image: "./og-image.jpg",
    description: "CityDAO citizens take part in the governance of CityDAO",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
