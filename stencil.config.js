exports.config = {
  bundles: [
    { components: ['db-site', 'db-header', 'db-nav', 'db-content'] },
    { components: ['db-about'] }

  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
