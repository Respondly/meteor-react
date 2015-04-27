var reactVersion = '0.13.0';


Package.describe({
  name: 'respondly:react',
  version: reactVersion,
  summary: 'The core React JS library.'
});



Package.onUse(function (api) {

  // Generated with: github.com/philcockfield/meteor-package-paths
  api.addFiles('shared/react.js', ['client', 'server']);

});

Package.onTest(function(api){

  // Generated with: github.com/philcockfield/meteor-package-paths
  

});
