import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'TEST' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    variant: ButtonVariant.CLEAR
  }
};

export const ClearDark: Story = {
  args: {
    variant: ButtonVariant.CLEAR
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const Outlined: Story = {
  args: {
    variant: ButtonVariant.OUTLINED
  }
};

export const OutlinedDark: Story = {
  args: {
    variant: ButtonVariant.OUTLINED
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
