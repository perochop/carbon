import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { dlsThemeSelector } from '../../../.storybook/theme-selectors';
import Textbox from '../../__experimental__/components/textbox';
import OptionsHelper from '../../utils/helpers/options-helper';
import { notes, Info } from './documentation';
import Accordion from './accordion.component';

function makeStory(name, themeSelector) {
  const component = () => {
    const { defaultProps } = Accordion;
    const iconAlign = select(
      'iconAlign',
      OptionsHelper.alignBinary,
      defaultProps.iconAlign
    );

    const commonProps = {
      iconAlign,
      iconType: select('iconType', ['chevron_down', 'dropdown']),
      iconRightMargin: iconAlign === 'left' ? text('iconRightMargin', defaultProps.iconRightMargin) : undefined,
      type: select(
        'type',
        OptionsHelper.themesBinary,
        defaultProps.type
      ),
      accordionPadding: number(
        'accordionPadding',
        defaultProps.accordionPadding
      ),
      headerPadding: number(
        'headerPadding',
        defaultProps.headerPadding
      ),
      headerMarginLeft: text('headerMarginLeft'),
      headingSize: select('headingSize', [32, 24, 20, 14], defaultProps.headingSize),
      onChange: action('expansion toggled')
    };

    return (
      <div>
        <Accordion { ...commonProps } title='With textbox'>
          <Textbox label='Label 1' />
        </Accordion>
        <Accordion
          { ...commonProps }
          title='With title aligned to the Textbox input'
          headerMarginLeft={ 15 }
          contentPaddingLeft={ 0 }
        >
          <Textbox
            label='Label 2'
            labelInline
            labelAlign='right'
            labelWidth={ 15 }
            inputWidth={ 85 }
          />
        </Accordion>
        <Accordion { ...commonProps } title='With other content'>
          <h4 style={ { margin: 0 } }>
            Accordion Content
          </h4>
        </Accordion>
      </div>
    );
  };

  const metadata = {
    themeSelector,
    info: {
      text: Info,
      propTablesExclude: [Textbox, React.Fragment]
    },
    notes: { markdown: notes },
    knobs: { escapeHTML: false }
  };

  return [name, component, metadata];
}

storiesOf('Accordion', module)
  .add(...makeStory('default', dlsThemeSelector));
