import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import SettingsPopover from './settings-popover.component';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import OptionsHelper from '../../utils/helpers/options-helper/options-helper';

function makeStory(name, themeSelector) {
  const component = () => {
    const iconType = select('icon type', [...OptionsHelper.icons], 'settings');
    const position = select('position', [...OptionsHelper.alignBinary], 'left');

    return (
      <div style={ position === 'left' ? { marginLeft: '400px' } : null }>
        <SettingsPopover
          title='Settings Popover'
          position={ position }
          iconType={ iconType }
        >
          <h1>Example of content</h1>
        </SettingsPopover>
      </div>
    );
  };

  const metadata = {
    themeSelector
  };

  return [name, component, metadata];
}

storiesOf('Settings Popover', module)
  .add(...makeStory('default', dlsThemeSelector));
