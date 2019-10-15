import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import classicTheme from '../../../../style/themes/classic';
import baseTheme from '../../../../style/themes/base';
import Weekday from './weekday.component';

describe('Weekday', () => {
  const render = (props) => {
    return TestRenderer.create(<Weekday { ...props }>sample children</Weekday>);
  };

  it('renders presentational div and context provider for its children', () => {
    expect(render({ theme: baseTheme, title: 'tile' })).toMatchSnapshot();
  });

  describe('classic theme', () => {
    it('applies custom styling', () => {
      expect(render({ theme: classicTheme })).toMatchSnapshot();
    });
  });
});
