import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/themes/dark.theme.scss';
import 'app/styles/themes/light.theme.scss';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { AppTheme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { children: 'Modal window' }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    isOpen: true
  }
};

export const ModalDark: Story = {
  args: {
    isOpen: true
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={AppTheme.DARK}>
        <Story />
      </ThemeDecorator>
    )
  ]
};
