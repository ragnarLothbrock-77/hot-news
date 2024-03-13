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
  args: { children: 'T' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    variant: ButtonVariant.REGULLAR
  }
};

export const ClearDark: Story = {
  args: {
    variant: ButtonVariant.REGULLAR
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const Round: Story = {
  args: {
    variant: ButtonVariant.ROUND
  }
};

export const RoundDark: Story = {
  args: {
    variant: ButtonVariant.ROUND
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const Pannel: Story = {
  args: {
    variant: ButtonVariant.PANNEL
  }
};

export const PannelDark: Story = {
  args: {
    variant: ButtonVariant.PANNEL
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const Square: Story = {
  args: {
    variant: ButtonVariant.SQUARE
  }
};

export const SquareDark: Story = {
  args: {
    variant: ButtonVariant.SQUARE
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
