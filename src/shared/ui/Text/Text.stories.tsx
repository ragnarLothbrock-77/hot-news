import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { Text, TextVariant } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: { children: 'Text' }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextTitleLight: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    title: 'Title',
    text: 'Text'
  }
};

export const TextTitleDark: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    title: 'Title',
    text: 'Text'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const OnlyTitleLight: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    title: 'Title'
  }
};

export const OnlyTitleDark: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    title: 'Title'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const OnlyTextLight: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    text: 'Text'
  }
};

export const OnlyTextDark: Story = {
  args: {
    variant: TextVariant.PRIMARY,
    text: 'Text'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}

export const ErrorTitleLight: Story = {
  args: {
    variant: TextVariant.ERROR,
    title: 'Title'
  }
};

export const ErrorTitleDark: Story = {
  args: {
    variant: TextVariant.ERROR,
    title: 'Title'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const ErrorTextLight: Story = {
  args: {
    variant: TextVariant.ERROR,
    text: 'Title'
  }
};

export const ErrorTextDark: Story = {
  args: {
    variant: TextVariant.ERROR,
    text: 'Title'
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
