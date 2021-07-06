import React from 'react';
import { Button as Btn, ButtonProps } from 'antd';
import { IButton } from 'types';

function Button({ size, type, label, className, children, ...args }: ButtonProps & IButton) {
  return <Btn className={className} size={size} type={type} {...args}>{label ?? children}</Btn>;
}

export default Button;
