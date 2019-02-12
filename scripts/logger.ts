import { createLogger, format, transports } from 'winston';

const { combine, colorize, simple } = format;

const LOG_LEVEL = 'verbose';

export const Logger = createLogger({
  level: LOG_LEVEL,
  format: combine(colorize(), simple()),
  transports: [new transports.Console({ level: LOG_LEVEL })]
});
