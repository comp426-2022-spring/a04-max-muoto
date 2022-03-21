const express = require('express');
const minimist = require('minimist');
const database = require('better-sqlite3')


const app = express()
const argv = (minimist)(process.argv.slice(2));

argv["port"];
argv["help"]
argv["debug"]


const HTTP_PORT = argv.port || 5000;

if (argv.help) {
  console.log("server.js [options]")
  console.log("--port	Set the port number for the server to listen on. Must be an integer between 1 and 65535.");
  console.log("--debug If set to `true`, creates endlpoints /app/log/access/ which returns a JSON access log from the database and /app/error which throws an error with the message \"Error test successful.\" Defaults to `false`.");
  console.log("--log If set to false, no log files are written. Defaults to true. Logs are always written to database.");
  console.log("--help Return this message and exit.");
  process.exit(0);
}

debug = false;
log = true;

if (argv.debug == "true") {
  debug = true;
}

if (argv.log == "false") {
  log = false;
}


// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});


if (debug == true) {
    app.get('/app/log/access', (req, res) => {
      flip_result = coinFlip();
      res.status(200).json({"flip" : flip_result});
  });

  app.get('/app/error', (req, res) => {
    throw new Error('Error test successful.')
  });
}


if (log == true) {

}


// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});


function create_db() {
  const db = new Database('log.db');

}
