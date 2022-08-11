import { createLogger, format, transports } from "winston";

const files = new transports.File({
  maxSize: 5120000,
  maxFiles: 5,
  filename: `${process.env.TEMP_FOLDER}/logs/errors/log-api.log`,
});
const exceptionFiles = new transports.File({
  maxSize: 5120000,
  maxFiles: 5,
  filename: `${process.env.TEMP_FOLDER}/logs/expections/log-api.log`,
});
const console = new transports.Console();

export const logger = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(
      (error) => `${error.level} ${error.timestamp} ${error.message}`
    )
  ),
  transports: [files, console],
  exceptionHandlers: [exceptionFiles],
});

if (process.env.ENVIRONMNET === "production" || process.env.NODE_ENV === "test")
  logger.remove(console);
