var reactVersion = '0.13.0';


Package.describe({
  name: 'respondly:react',
  version: reactVersion,
  summary: 'The React client-side library.'
});



Package.onUse(function (api) {

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('shared/react.js', ['client', 'server']);

});
