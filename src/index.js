import { isBoolean, isDate, isFunction, isNumber, isString } from 'lodash';
import chalk from 'chalk';

const shouldSerialize = arg =>
  !isBoolean(arg) &&
  !isDate(arg) &&
  !isFunction(arg) &&
  !isNumber(arg) &&
  !isString(arg);
const toString = arg =>
  shouldSerialize(arg) ? JSON.stringify(arg) : arg.toString();

class Logger {
  log(message, ...optionalParams) {
    this._writeLineTo(process.stdout, chalk.reset, message, optionalParams);
  }

  warn(message, ...optionalParams) {
    this._writeLineTo(process.stdout, chalk.yellow, message, optionalParams);
  }

  error(message, ...optionalParams) {
    this._writeLineTo(process.stderr, chalk.red, message, optionalParams);
  }

  _writeLineTo(stream, style, message, optionalParams) {
    const buffer = Buffer.from(
      style([message, ...optionalParams.map(toString)].join(' '))
    );

    stream.write(buffer, optionalParams);
    stream.write('\n');
  }
}

export default new Logger();
