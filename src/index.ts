import path from 'path';

global.__basedir = path.resolve(__dirname, '../');

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`);
  console.trace('Error Trace', err);
  process.exit(1);
});
