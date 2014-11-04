Package.describe({
  name: 'nahue:simple-line-icons',
  summary: 'Simple Line Icons packaged for meteor',
  version: '1.0.0',
  git: 'https://github.com/nahue/meteor-simple-line-icons.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
      'lib/css/simple-line-icons.css',
      'lib/fonts/Simple-Line-Icons.eot',
      'lib/fonts/Simple-Line-Icons.svg',
      'lib/fonts/Simple-Line-Icons.ttf',
      'lib/fonts/Simple-Line-Icons.woff',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nahue:simple-line-icons');
  api.addFiles([
      'lib/css/simple-line-icons.css',
      'lib/fonts/Simple-Line-Icons.eot',
      'lib/fonts/Simple-Line-Icons.svg',
      'lib/fonts/Simple-Line-Icons.ttf',
      'lib/fonts/Simple-Line-Icons.woff',
  ], 'client');
});
