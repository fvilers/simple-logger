import { isBoolean, isDate, isFunction, isNumber, isString } from 'lodash';

export function toString(arg: any) {
  return shouldSerialize(arg) ? JSON.stringify(arg) : arg.toString();
}

function shouldSerialize(arg: any) {
  return (
    !isBoolean(arg) &&
    !isDate(arg) &&
    !isFunction(arg) &&
    !isNumber(arg) &&
    !isString(arg)
  );
}
