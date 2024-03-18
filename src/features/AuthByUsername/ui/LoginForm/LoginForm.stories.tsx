import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import StoreDecorator from 'shared/config/storybookDecorators/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs']
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={
        { auth: { username: 'admin', password: '123' } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};

export const LoginFormDark: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <StoreDecorator state={
        { auth: { username: 'admin', password: '123' } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};

export const LoginFormWithErrorLight: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={
        { auth: { username: 'admin', password: '123', error: 'Error' } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};

export const LoginFormWithErrorDark: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <StoreDecorator state={
        { auth: { username: 'admin', password: '123', error: 'Error' } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};

export const LoginFormLoadingLight: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={
        { auth: { isLoading: true } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};

export const LoginFormLoadingDark: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
    (Story) => (
      <StoreDecorator state={
        { auth: { isLoading: true } }
      } >
        <Story />
      </StoreDecorator >
    )
  ]
};
