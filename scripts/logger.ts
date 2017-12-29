import * as winston from 'winston';
import { isEmpty } from 'lodash';

const LOG_LEVEL = 'debug';

export const Logger = new winston.Logger({
  level: LOG_LEVEL,
  transports: [
    new winston.transports.Console({
      level: 'debug',
      formatter: (opts: any) => {
        if (opts.meta) {
          if (typeof opts.meta['durationMs'] === 'number') {
            opts.message += ' ' + opts.meta['durationMs'] + 'ms';
            delete opts.meta['durationMs'];
          }
          if (!isEmpty(opts.meta)) console.log(opts.meta);
        }
        return winston.config.colorize(opts.level, opts.level.toUpperCase()) + ' ' + opts.message;
      }
    })
  ]
});

