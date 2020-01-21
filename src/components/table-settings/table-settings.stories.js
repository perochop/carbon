import React from 'react';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import TableSettings from '.';
import Icon from '../icon';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import SettingsPopover from './settings-popover/settings-popover.component';

const store = new Store({
  isOpen: true
});

function makeStory(name, themeSelector) {
  const title = text('title', 'Table Settings');
  const handleClose = () => {
    store.set({ isOpen: false });
    action('onClose')();
  };

  const handleOpen = () => {
    store.set({ isOpen: true });
    action('onOpen')();
  };

  const component = () => {
    return (
      <div style={ { marginLeft: '400px' } }>
        <TableSettings title='Table Settings'>Test Children </TableSettings>
      </div>
    );
  };

  const metadata = {
    themeSelector
  };

  return [name, component, metadata];
}

storiesOf('TableSettings', module)
  .add(...makeStory('default', dlsThemeSelector));
