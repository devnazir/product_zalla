import React from 'react';
import Button from 'components/UI/atoms/Button';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from 'antd';
import { IButton } from 'types';

export default {
  component: Button,
  title: 'Atoms/Button',
} as Meta;

const Template: Story<ButtonProps & IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  type: 'primary',
  size: 'large',
  label: 'Hello', 
  className: 'btn btn-signup'
};

Danger.args = {
  danger: true,
  label: 'Hello',
};
