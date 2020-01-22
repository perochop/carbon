import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import OptionsHelper from '../../utils/helpers/options-helper/options-helper';
import PopoverContainer from './popover-container.component';
import Button from '../button';

function makeStory(name, themeSelector) {
  const component = () => {
    const title = text('title', 'Popover Title');
    const iconType = select('iconType', [...OptionsHelper.icons], 'settings');
    const position = select('position', [...OptionsHelper.alignBinary], 'left');

    return (
      <div style={ position === 'left' ? { marginLeft: '400px' } : null }>
        <PopoverContainer
          title={ title }
          position={ position }
          iconType={ iconType }
        >
          <p>Exercitation esse ipsum labore sunt pariatur dolore proident nostrud laboris et culpa pariatur. Pariatur fugiat id sit elit. Cillum amet irure id sint exercitation est ut.</p>
          <Button>Button</Button>
        </PopoverContainer>
      </div>
    );
  };

  const metadata = {
    themeSelector
  };

  return [name, component, metadata];
}

storiesOf('Popover Container', module)
  .add(...makeStory('default', dlsThemeSelector));
