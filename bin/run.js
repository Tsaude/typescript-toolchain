/* eslint-disable */

const nodemon = require("nodemon");

const script = process.argv.slice(2)[0]

if (!script) {
    console.error('No script was passed...')
    process.exit(1)
}

nodemon({
  script: script,
  restartable: "rs",
  ignore: [".git", "./node_modules/**/node_modules"],
  verbose: true,
  execMap: {
    ts: "node --require ts-node/register"
  },
  watch: ["src/"],
  env: {
    NODE_ENV: "development"
  },
  ext: "js,json,ts"
});

nodemon
  .on("start", function() {
    console.log("App has started");
  })
  .on("quit", function() {
    console.log("App has quit");
    process.exit();
  })
  .on("restart", function(files) {
    console.log("App restarted due to: ", files);
  });
