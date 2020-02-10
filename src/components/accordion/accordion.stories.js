import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import OptionsHelper from '../../utils/helpers/options-helper';
import Accordion from './accordion.component';

export default {
  title: 'Test/Accordion',
  component: Accordion,
  parameters: {
    themeSelector: dlsThemeSelector,
    info: {
      disable: true
    },
    knobs: { escapeHTML: false }
  }
};

export const Basic = () => {
  const { defaultProps } = Accordion;

  return (
    <Accordion
      iconType={ select('iconType', ['chevron_down', 'dropdown']) }
      iconAlign={ (
        'iconAlign',
        OptionsHelper.alignBinary,
        defaultProps.iconAlign
      ) }
      type={ select(
        'type',
        OptionsHelper.themesBinary,
        defaultProps.type
      ) }
      title={ text('Title', 'Title') }
      onChange={ action('expansion toggled') }
    >
      <h4 style={ { margin: 0 } }>
        Accordion Content
      </h4>
    </Accordion>
  );
};
