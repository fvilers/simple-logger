# simple-logger

_A simple but colored logger for NodeJS_

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
const logger = require('@fvilers/simple-logger').default;

// Log anything
logger.log('A string', { or: 'any object' }, 'even', new Date(), 'or a boolean', true);

// Log as warning
logger.warn('⚠️', 'Be careful');

// Log as error
logger.error('💣', 'Something went wrong!');
```

## How it works

The library exports a `Logger` singleton that can be used to write messages to **stdout** with `log()` and `warn()` while it writes to **stderr** with `error()`.

## Bugs

Don't use version `1.0.0` in a project without `@babel/cli` as it won't be correctly transpiled during installation. This bug has been fixed in version `1.0.1`.
