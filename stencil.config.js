exports.config = {
  bundles: [
    { components: ['db-site', 'db-header', 'db-nav', 'db-content', 'db-about', 'db-articles', 'db-projects'] },

  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
