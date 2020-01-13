import React from 'react';
import { storiesOf } from '@storybook/react';
import TableSettings from '.';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';

function makeStory(name, themeSelector) {
  const component = () => (
    <TableSettings />
  );

  const metadata = {
    themeSelector
  };

  return [name, component, metadata];
}

storiesOf('TableSettings', module)
  .add(...makeStory('default', dlsThemeSelector));
