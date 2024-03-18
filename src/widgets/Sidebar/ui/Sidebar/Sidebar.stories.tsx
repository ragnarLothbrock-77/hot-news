import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
  args: {}
};

export const SidebarDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
}
