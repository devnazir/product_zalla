import Button from 'components/UI/atoms/Button';
import { Meta, Story } from '@storybook/react';
import { IButton } from 'types';

export default {
  component: Button,
  title: 'Atoms/Button',
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Default = Template.bind({});
export const White = Template.bind({});
export const Disabled = Template.bind({});

Primary.args = {
  type: 'primary',
  size: 'large',
  label: 'DAFTAR',
  className: 'btn btn-signup',
};

Default.args = {
  label: 'DEFAULT',
  className: 'btn btn-default',
};

White.args = {
  label: 'Explore our program',
  size: 'large',
  className: 'btn btn-white text-blue',
};

Disabled.args = {
  label: 'Coming Soon',
  size: 'large',
  disabled: true,
  className: 'btn btn-disabled bordered px-2d'
}
