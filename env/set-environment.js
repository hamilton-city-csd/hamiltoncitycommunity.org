/* 

  Removes `env/active.json` (if exists)
  then copies `env/development.json` or `env/production.json`
  to be the new `env/active.json`

  Notes: this file expects to be ran from the root directory, not from within env

*/


const fs = require("fs");

let environmentToFileMap = {
  "--prod": "production.json",
  "--dev":  "development.json",
}

const output = (...opts) => console.log("[env]", ...opts);

const flag = process.argv[2] || "--dev";
const environmentFile = environmentToFileMap[flag];

// invalid flags will result int this option
// no flag will result in --dev
// so let's make sure we display what the correction option was, 
// in case they tried --production instead of --prod
if (!environmentFile) {
  output("Exiting. Invalid environment name provided.");
  const options = Object.keys(environmentToFileMap).map(el => `\n\t${el}`).join("");
  console.log("\tValid environment flags:\n", options, "\n");
  
  return 1;
}

const envName = flag.replace("--", "");
output(`Setting environment to ${envName} \t (using '${environmentFile}')`);

const sourcePath = `./env/${environmentFile}`;
const targetPath = `./src/.env.json`;

fs.copyFileSync(sourcePath, targetPath);
output(`Now using ${envName}`);






