import type { Preview, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { AppTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import RouterDecorator from 'shared/config/storybookDecorators/RouterDecorator';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeDecorator theme={AppTheme.LIGHT}><Story /></ThemeDecorator>
    ),
    (Story: StoryFn) => (
      <RouterDecorator><Story /></RouterDecorator>
    )
  ]
}

export default preview;
