import React from 'react';
import {
  boolean,
  text,
  number,
  withKnobs
} from '@storybook/addon-knobs';
import { Store, State } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { notes, info } from './documentation';
import Search from '.';

export default {
  title: 'Experimental/Search',
  component: Search,
  decorators: [withKnobs]
};

export const searchComponent = () => {
  const store = new Store({
    value: ''
  });

  const handleChange = (ev) => {
    store.set({ value: ev.target.value });
    action('change')(ev);
  };

  const handleBlur = (ev) => {
    action('blur')(ev);
  };

  return (
    <Search
      placeholder={ text('placeholder', 'Search...') }
      threshold={ number('threshold', Search.defaultProps.threshold) }
      searchButton={ boolean('searchButton', true) }
      onChange={ handleChange }
      onBlur={ handleBlur }
      value={ store.get('value') }
      name='search_name'
      id='search_id'
    />
  );
};

searchComponent.story = {
  name: 'default',
  parameters: {
    info: {
      text: info,
      propTablesExclude: [State]
    },
    notes: { markdown: notes }
  }
};
