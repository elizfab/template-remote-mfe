const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // Nome do remote: uma palavra, minúsculas, SEM hífen. Igual à chave no mf.manifest.json do shell.
  name: 'exemplo',

  exposes: {
    './Routes': './src/app/remote-entry/entry.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
