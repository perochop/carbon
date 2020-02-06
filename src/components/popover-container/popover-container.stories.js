import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import OptionsHelper from '../../utils/helpers/options-helper/options-helper';
import PopoverContainer from './popover-container.component';
import Button from '../button';

export default {
  component: PopoverContainer,
  title: 'Design System/Popover Container'
};

export const basic = () => {
  const title = text('title', 'Popover Title');
  const iconType = select('iconType', [...OptionsHelper.icons], 'settings');
  const position = select('position', [...OptionsHelper.alignBinary], 'right');

  return (
    <div style={ position === 'left' ? { marginLeft: '400px' } : null }>
      <PopoverContainer
        title={ title }
        position={ position }
        iconType={ iconType }
      >
        <p>
        Exercitation esse ipsum labore sunt pariatur dolore proident nostrud laboris et culpa pariatur.
        Pariatur fugiat id sit elit. Cillum amet irure id sint exercitation est ut.
        </p>
        <Button>Button</Button>
      </PopoverContainer>
    </div>
  );
};
