import chalk from 'chalk';
import { Logger } from '../src';

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const DEFAULT_CONTEXT = 'default';
const DEFAULT_TIMESTAMP = 1553776367263;

describe('Logger', () => {
  test('log should write message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    const logger = new Logger();

    // Act
    logger.log(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(chalk.reset(DEFAULT_TEXT));
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('warn should write yellow message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    const logger = new Logger();

    // Act
    logger.warn(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(chalk.yellow(DEFAULT_TEXT));
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('error should write red message to sdterr', () => {
    // Arrange
    const spy = jest.spyOn(process.stderr, 'write').mockImplementation();
    const logger = new Logger();

    // Act
    logger.error(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(chalk.red(DEFAULT_TEXT));
    expect(spy).toHaveBeenCalledWith(message);
  });
});

describe('Logger with context', () => {
  test('log should write message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    const logger = new Logger({ context: DEFAULT_CONTEXT });

    // Act
    logger.log(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.reset(`[${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`)
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('warn should write yellow message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    const logger = new Logger({ context: DEFAULT_CONTEXT });

    // Act
    logger.warn(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.yellow(`[${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`)
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('error should write red message to sdterr', () => {
    // Arrange
    const spy = jest.spyOn(process.stderr, 'write').mockImplementation();
    const logger = new Logger({ context: DEFAULT_CONTEXT });

    // Act
    logger.error(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.red(`[${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`)
    );
    expect(spy).toHaveBeenCalledWith(message);
  });
});

describe('Logger with timestamp', () => {
  test('log should write message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockReturnValue(DEFAULT_TIMESTAMP);
    const logger = new Logger({ timestamp: true });

    // Act
    logger.log(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.reset(
        `${new Date(DEFAULT_TIMESTAMP).toISOString()} ${DEFAULT_TEXT}`
      )
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('warn should write yellow message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockImplementation(() => DEFAULT_TIMESTAMP);
    const logger = new Logger({ timestamp: true });

    // Act
    logger.warn(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.yellow(
        `${new Date(DEFAULT_TIMESTAMP).toISOString()} ${DEFAULT_TEXT}`
      )
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('error should write red message to sdterr', () => {
    // Arrange
    const spy = jest.spyOn(process.stderr, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockImplementation(() => DEFAULT_TIMESTAMP);
    const logger = new Logger({ timestamp: true });

    // Act
    logger.error(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.red(`${new Date(DEFAULT_TIMESTAMP).toISOString()} ${DEFAULT_TEXT}`)
    );
    expect(spy).toHaveBeenCalledWith(message);
  });
});

describe('Logger with context and timestamp', () => {
  test('log should write message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockReturnValue(DEFAULT_TIMESTAMP);
    const logger = new Logger({ context: DEFAULT_CONTEXT, timestamp: true });

    // Act
    logger.log(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.reset(
        `${new Date(
          DEFAULT_TIMESTAMP
        ).toISOString()} [${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`
      )
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('warn should write yellow message to sdtout', () => {
    // Arrange
    const spy = jest.spyOn(process.stdout, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockImplementation(() => DEFAULT_TIMESTAMP);
    const logger = new Logger({ context: DEFAULT_CONTEXT, timestamp: true });

    // Act
    logger.warn(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.yellow(
        `${new Date(
          DEFAULT_TIMESTAMP
        ).toISOString()} [${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`
      )
    );
    expect(spy).toHaveBeenCalledWith(message);
  });

  test('error should write red message to sdterr', () => {
    // Arrange
    const spy = jest.spyOn(process.stderr, 'write').mockImplementation();
    jest.spyOn(Date, 'now').mockImplementation(() => DEFAULT_TIMESTAMP);
    const logger = new Logger({ context: DEFAULT_CONTEXT, timestamp: true });

    // Act
    logger.error(DEFAULT_TEXT);

    // Assert
    const message = Buffer.from(
      chalk.red(
        `${new Date(
          DEFAULT_TIMESTAMP
        ).toISOString()} [${DEFAULT_CONTEXT}] ${DEFAULT_TEXT}`
      )
    );
    expect(spy).toHaveBeenCalledWith(message);
  });
});
