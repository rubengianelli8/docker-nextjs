import { createLogger, format, transports } from "winston";
const files = new transports.File({
  maxSize: 5120000,
  maxFiles: 5,
  filename: `logs/errors/log-api.log`,
});
const console = new transports.Console();
export const logger = createLogger({
  format: format.json(),
  transports: [files, console],
});
if (process.env.ENTORNO === "production") logger.remove(console);
