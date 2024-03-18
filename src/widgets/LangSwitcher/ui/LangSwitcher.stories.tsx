import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LangSwitcherLight: Story = {
  args: {
    collapsed: false
  }
};

export const LangSwitcherDark: Story = {
  args: {
    collapsed: false
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};

export const LangSwitcherCollapsedLight: Story = {
  args: {
    collapsed: true
  }
};

export const LangSwitcherCollapsedDark: Story = {
  args: {
    collapsed: true
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}
