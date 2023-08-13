import chalk from "chalk";

export default async function handleErrors() {
  process.on("unhandledRejection", (error) => {
    console.error(chalk.redBright("[ERROR] Unhandled promise rejection:"));
    console.error(error);
  });

  process.on("uncaughtException", (error) => {
    console.error(chalk.redBright("[ERROR] Uncaught exception:"));
    console.error(error);
  });

  process.on("uncaughtExceptionMonitor", (error) => {
    console.error(chalk.redBright("[ERROR] Uncaught exception monitor:"));
    console.error(error);
  });

  process.on("beforeExit", (code) => {
    console.log(
      chalk.yellowBright(`[WARNING] Process is about to exit with code ${code}`)
    );
  });

  process.on("exit", (code) => {
    console.log(
      chalk.yellowBright(`[WARNING] Process exited with code ${code}`)
    );
  });
}
