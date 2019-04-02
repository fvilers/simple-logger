# simple-logger

A simple but colored logger for NodeJS

## Support

If you use and like this library, feel free to support my Open Source projects.

[![donate](https://www.paypalobjects.com/en_US/BE/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JZ26X897M9V9L&currency_code=EUR)

## How to install

```
npm install @fvilers/simple-logger
```

or

```
yarn add @fvilers/simple-logger
```

## How to use

```
const logger = require('@fvilers/simple-logger');

// Log anything
logger.log('A string', { or: 'any object' }, 'even', new Date(), 'or a boolean', true);

// Log as warning
logger.warn('⚠️', 'Be careful');

// Log as error
logger.error('💣', 'Something went wrong!');
```

## How it works

The library exports a `Logger` singleton that can be used to write messages to **stdout** with `log()` and `warn()` while it writes to **stderr** with `error()`.

## Context

Sometimes, it's useful to add some context to the messages being logged. You can create your own instance of the `Logger` class and set its context. This will prefix every message with the specified context.

```
const { Logger } = require('@fvilers/simple-logger');
const logger = new Logger({ context: 'my logger' });

logger.log('Hey there!'); // This will output: [my logger] Hey, there!
```

## Timestamp

Sometimes, it's useful to add timestamp to the messages being logged. You can create your own instance of the `Logger` class and set it to prefix every message with the current timestamp.

```
const { Logger } = require('@fvilers/simple-logger');
const logger = new Logger({ timestamp: true });

logger.log('Hey there!'); // This will output: 2019-03-28T12:32:47.263Z Hey, there!
```
