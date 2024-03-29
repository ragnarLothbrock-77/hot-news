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

export const ButtonPrimaryLight: Story = {
  args: {
    variant: ButtonVariant.PRIMARY
  }
};

export const ButtonPrimaryDark: Story = {
  args: {
    variant: ButtonVariant.PRIMARY
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const ButtonRoundLight: Story = {
  args: {
    variant: ButtonVariant.ROUND
  }
};

export const ButtonRoundDark: Story = {
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

export const ButtonPannelLight: Story = {
  args: {
    variant: ButtonVariant.PANNEL
  }
};

export const ButtonPannelDark: Story = {
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

export const ButtonSquareLight: Story = {
  args: {
    variant: ButtonVariant.SQUARE
  }
};

export const ButtonSquareDark: Story = {
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

export const ButtonPrimaryDisabledLight: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    disabled: true
  }
};

export const ButtonPrimaryDisabledDark: Story = {
  args: {
    variant: ButtonVariant.PRIMARY
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
