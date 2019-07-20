const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + 'secret-key';

  config.view = {
    defaultViewEngine: 'nunjucks',
    root: [
      path.join(appInfo.baseDir, 'app/public')
    ].join(',')
  };

  config.static = {
    prefix: '/'
  };


  config.logger = {
    dir: path.join(__dirname, `../logs/${appInfo.name.toLowerCase()}`),
    consoleLevel: 'DEBUG', // NONE
    level: 'DEBUG',
    appLogName: `${appInfo.name.toLowerCase()}.log`,
    coreLogName: `${appInfo.name.toLowerCase()}.core.log`,
    agentLogName: `${appInfo.name.toLowerCase()}.agent.log`,
    errorLogName: `${appInfo.name.toLowerCase()}.error.log`
  };

  config.logrotator = {
    filesRotateByHour: [], // list of files that will be rotated by hour
    filesRotateBySize: [], // list of files that will be rotated by size
    maxFileSize: 50 * 1024 * 1024, // Max file size to judge if any file need rotate
    maxFiles: 10, // pieces rotate by size
    rotateDuration: 60000, // time interval to judge if any file need rotate
    maxDays: 10, // keep max days log files, default is `31`. Set `0` to keep all logs
  };

  config.api = 'localhost:3000/';

  config.cors = {
    origin: '*',
    allowMethods: [ 'GET', 'POST' ]
  };

  config.security = {
    csrf: {
      useSession: true,
      enable: false,
    }
  };

  return config;
};
