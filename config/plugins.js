module.exports = ({ env }) => ({
  publisher: {
    enabled: true,
  },
  ckeditor: true,
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  seo: {
    enabled: true,
  },
  style: {
    enabled: true,
    resolve: "./src/plugins/style",
  },
});
