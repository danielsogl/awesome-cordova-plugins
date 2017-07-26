const exec = require('child-process-promise').exec;
let diff;
exec(`git branch | grep \\* | cut -d ' ' -f2`)
  .then(output => {
    if (output.stderr) {
      return Promise.reject(output.stderr);
    }

    const branch = output.stdout.trim();

    if (branch !== 'master') {

      console.log('Merging master branch in ...');
      // not on master branch
      // let's test the changes that were made
      return exec(`git merge origin master`);
    }
  })
  .then((output) => {
    if (output && output.stderr) {
      return Promise.reject(output.stderr);
    }
    console.log('Checking for differences ...');
    return exec(`git diff --name-status origin master`)
  })
  .then((output) => {
    if (output && output.stderr) {
      return Promise.reject(output.stderr);
    }

    diff = output.stdout;
    diff = diff.replace(/A\s+/g, '');
    diff = diff.match(/src\/@ionic-native\/plugins\/([a-zA-Z0-9\-]+)\/index\.ts/g);

    if (!diff) process.exit();

    console.log(`${ diff.length } plugins were modified. We will now build them to verify they still work.`);

    return exec('npm run build:core --silent');
  })
  .then((output) => {

    if (output && output.stderr) {
      return Promise.reject(output.stderr);
    }

    console.log('Built core library successfully ...');
    console.log('Building plugins ...');

    diff = diff.map(text => text.replace('src/@ionic-native/plugins/', '').replace('/index.ts', ''));

    return exec(`npm run build:modules ${diff.join(' ')} --silent`);
  })
  .then((output) => {
    if (output && output.stderr) {
      console.log(output.stderr);
      process.exit(1);
    }
    console.log(output.stdout);
    process.exit();
  })
  .catch(e => {
    console.log(e.message || e);
    process.exit(1);
  });
