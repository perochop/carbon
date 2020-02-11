import React from 'react';
import {
  boolean,
  text,
  number,
  withKnobs
} from '@storybook/addon-knobs';
import { Store } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import Search from '.';

export default {
  title: 'Test/Search',
  component: Search,
  decorators: [withKnobs],
  parameters: {
    info: {
      disable: true
    }
  }
};

export const Basic = () => {
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
