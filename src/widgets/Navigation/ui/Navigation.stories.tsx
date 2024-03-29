import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { Navigation } from './Navigation';

const meta = {
  title: 'widgets/Navigation',
  component: Navigation,
  tags: ['autodocs']
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationLight: Story = {
  args: {
    collapsed: false
  }
};

export const NavigationDark: Story = {
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
}
