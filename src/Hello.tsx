import { css } from '@linaria/core';
import React, { FC } from 'react';

const styles = {
  hello: (baseFontSize: number) => css`
    background-color: #EEEEEE;
    font-size: ${baseFontSize * 2}px
  `
}

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={styles.hello(10)}>
    <h1>Hello React</h1>
  </div>;
}
