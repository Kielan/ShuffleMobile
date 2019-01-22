import base64 from 'base-64';
import { isString } from 'lodash';

export const isEmailValid = (email) => {
  /* tslint:disable:max-line-length */
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* tslint:enable */
  return emailRegex.test(email);
};

export const isNotEmtpyStr = (str) => {
  if (!isString(str)) { return false; }
  if (str.trim().length === 0) { return false; }
  return true;
};

export const isEmtpyStr = (str) => !isNotEmtpyStr(str);

export const decodeFromBase64 = (str) => base64.decode(str);
