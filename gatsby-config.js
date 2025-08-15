module.exports = {
  siteMetadata: {
    title: `Mi sitio`,
    siteUrl: `https://www.misitio.com`
  },
  plugins: [
    // otros plugins...
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        // modulePath es opcional, solo si tienes un archivo JS para inicializar widgets personalizados
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
