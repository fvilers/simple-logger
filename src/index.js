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

export class Logger {
  constructor(context) {
    this._context = context;
  }

  get context() {
    return this._context;
  }

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
      style(
        [
          this.context ? `[${this.context}] ${message}` : message,
          ...optionalParams.map(toString)
        ].join(' ')
      )
    );

    stream.write(buffer, optionalParams);
    stream.write('\n');
  }
}

export default new Logger();
