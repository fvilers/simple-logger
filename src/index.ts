import chalk, { Chalk } from 'chalk';
import { Options, DEFAULT_OPTIONS } from './options';
import { toString } from './helpers';

export class Logger {
  constructor(private readonly options: Options = DEFAULT_OPTIONS) {}

  public log(message: string, ...optionalParams: Array<any>) {
    this.writeLineTo(process.stdout, chalk.reset, message, optionalParams);
  }

  public warn(message: string, ...optionalParams: Array<any>) {
    this.writeLineTo(process.stdout, chalk.yellow, message, optionalParams);
  }

  public error(message: string, ...optionalParams: Array<any>) {
    this.writeLineTo(process.stderr, chalk.red, message, optionalParams);
  }

  private writeLineTo(
    stream: NodeJS.WriteStream,
    style: Chalk,
    message: string,
    optionalParams: Array<any>
  ) {
    const { context, timestamp } = this.options;
    const text = new Array<string>();

    if (context) {
      text.push(`[${context}]`);
    }

    if (timestamp) {
      text.push(`${Date.now()} -`);
    }

    text.push(message);
    text.push(...optionalParams.map(toString));

    const buffer = Buffer.from(style(text.join(' ')));

    stream.write(buffer);
    stream.write('\n');
  }
}

export default new Logger();
