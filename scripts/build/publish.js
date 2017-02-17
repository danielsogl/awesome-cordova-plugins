// Node module dependencies
const fs = require('fs-extra-promise').useFs(require('fs-extra')),
  queue = require('queue'),
  path = require('path'),
  exec = require('child-process-promise').exec;


const ROOT = path.resolve(path.join(__dirname, '../../')),
  DIST = path.resolve(ROOT, 'dist', 'packages-dist', '@ionic-native'),
  PLUGINS_ROOT = path.resolve(DIST, 'plugins'),
  CORE = path.resolve(DIST, 'core'),
  UTILS = path.resolve(DIST, 'utils');

const FLAGS = '--access public --tag alpha'; // add any flags here if you want... (example: --tag alpha)

console.log('Publishing @ionic-native/core');
exec(`npm publish ${CORE} ${FLAGS}`)
  .then(() => {
    console.log('Publishing @ionic-native/utils');
    return exec(`npm publish ${UTILS} ${FLAGS}`)
  })
  .then(() => {

    const PLUGINS = fs.readdirSync(PLUGINS_ROOT);

    const QUEUE = queue({
      concurrency: 10
    });

    PLUGINS.forEach(pluginName => {

      QUEUE.push(done => {

        console.log(`Publishing plugin ${pluginName}`);
        const pluginPath = path.resolve(PLUGINS_ROOT, pluginName);

        exec(`npm publish ${pluginPath} ${FLAGS}`)
          .then(() => done())
          .catch(done);

      });

    });

    QUEUE.start((err) => {

      if (err) {
        console.log('Error publishing ionic-native. ', err);
      } else {
        console.log('Done publishing ionic-native!');
      }

    });

  })
  .catch(e => {

    console.log('Publish failed');
    console.log(e);

  });
