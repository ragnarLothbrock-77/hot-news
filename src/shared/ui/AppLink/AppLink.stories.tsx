import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkVariant } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '',
    children: 'Link'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY
  }
};

export const PrimaryDark: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}

export const Inverted: Story = {
  args: {
    variant: AppLinkVariant.ACCENTED
  }
};

export const InvertedDark: Story = {
  args: {
    variant: AppLinkVariant.ACCENTED
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}

export const Red: Story = {
  args: {
    variant: AppLinkVariant.RED
  }
};

export const RedDark: Story = {
  args: {
    variant: AppLinkVariant.RED
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}
