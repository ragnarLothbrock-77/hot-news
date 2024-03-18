import type { Preview, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { AppTheme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import RouterDecorator from 'shared/config/storybookDecorators/RouterDecorator';
import StoreDecorator from 'shared/config/storybookDecorators/StoreDecorator';

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
    ),
    (Story: StoryFn) => (
      <StoreDecorator><Story /></StoreDecorator>
    )
  ]
}

export default preview;
