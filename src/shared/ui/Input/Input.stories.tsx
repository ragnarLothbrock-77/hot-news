import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithValueLight: Story = {
  args: {
    value: 'Input value',
    placeholder: 'Type text'
  }
};

export const InputWithValueDark: Story = {
  args: {
    value: 'Input value',
    placeholder: 'Type text'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const InputWithPlaceholderLight: Story = {
  args: {
    placeholder: 'Type text'
  }
};

export const InputWithPlaceholderDark: Story = {
  args: {
    placeholder: 'Type text'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
