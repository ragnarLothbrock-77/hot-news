import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { AuthControl } from './AuthControl';
import StoreDecorator from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'widgets/AuthControl',
  component: AuthControl,
  tags: ['autodocs']
} satisfies Meta<typeof AuthControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthControlLight: Story = {
  args: {}
};

export const AuthControlDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const AuthControlLogOutLight: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{ user: { authData: {} } }} >
        <Story />
      </StoreDecorator>
    )
  ]
};

export const AuthControlLogOutDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <StoreDecorator state={{ user: { authData: {} } }} >
        <Story />
      </StoreDecorator>
    )
  ]
};
