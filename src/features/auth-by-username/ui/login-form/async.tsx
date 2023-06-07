import { FC, lazy } from 'react';
import { Props } from './form';

const LoginFormAsync = lazy<FC<Props>>(
  () => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./form')), 1500);
  }),
);

export default LoginFormAsync;
