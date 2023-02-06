import chalk from "chalk";

const URL = "https://8080-mxeise-simpleserver-tq1tk11ziq7.ws-eu85.gitpod.io/";

async function SendRequest() {
  try {
    const response = await fetch(URL);
    const json = await response.json();
    console.log(chalk.green(JSON.stringify(json, null, 2)));
  } catch (error) {
    console.error(chalk.red(error));
  }
}

SendRequest();
