import { createLogger, transports, format } from 'winston';
const { label, printf, prettyPrint, combine, colorize, simple } = format;

const LOG_LEVEL = 'silly';

export const Logger = createLogger({
  level: LOG_LEVEL,
  format: combine(
    colorize(),
    simple(),
  ),
  transports: [new transports.Console({ level: LOG_LEVEL })]
});
