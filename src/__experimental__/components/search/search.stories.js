import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Store, State } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { dlsThemeSelector } from '../../../../.storybook/theme-selectors';
import { notes, info } from './documentation';
import Search from '.';
import getDocGenInfo from '../../../utils/helpers/docgen-info';

Search.__docgenInfo = getDocGenInfo(
  require('./docgenInfo.json'),
  /search\.component(?!spec)/
);

const store = new Store({
  value: ''
});

function makeStory(name, themeSelector, component) {
  const metadata = {
    themeSelector,
    info: {
      text: info,
      propTables: [Search],
      propTablesExclude: [State]
    },
    notes: { markdown: notes },
    knobs: { escapeHTML: false }
  };

  return [name, component, metadata];
}

const searchStory = () => {
  const handleChange = (ev) => {
    store.set({ value: ev.target.value });
    action('change')(ev);
  };

  const handleBlur = (ev) => {
    action('blur')(ev);
  };
  return (
    <State store={ store }>
      <Search
        placeholder={ text('placeholder', 'Search...') }
        threshold={ text('threshold', Search.defaultProps.threshold) }
        searchButton={ boolean('searchButton', true) }
        onChange={ handleChange }
        onBlur={ handleBlur }
        value={ store.get('value') }
        name='search_name'
        id='search_id'
      />
    </State>
  );
};

storiesOf('Experimental/Search', module)
  .add(...makeStory('default', dlsThemeSelector, searchStory));
