import { Meta, Story } from '@storybook/react';
import Navbar from 'components/UI/molecules/Navbar';

export default {
  component: Navbar,
  title: 'Molecules/Navbar',
} as Meta;

export const Home: Story = () => <Navbar/>;
