import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Input } from '../input';
import Search from './search.component';
import { StyledSearchFilterIcon } from './search.style';
import { assertStyleMatch } from '../../../__spec_helper__/test-utils';
import StyledInput from '../input/input.style';
import StyledIcon from '../../../components/icon/icon.style';
import Icon from '../../../components/icon';

describe('Search', () => {
  const renderWrapper = (props, render = shallow) => (
    render(
      <Search
        { ...props }
      />
    )
  );
  describe('styles', () => {
    it('matches the expected styles', () => {
      assertStyleMatch({
        borderBottom: '2px solid',
        display: 'inline-flex',
        borderBottomColor: '#CCD6DA',
        padding: '4px',
        fontSize: '14px',
        fontWeight: '700'
      }, renderWrapper({ value: '' }, mount));
    });

    it('matches the expected styles when the input is focused', () => {
      const wrapper = renderWrapper({ value: '' }, mount);
      const input = wrapper.find('input');
      input.simulate('focus');
      assertStyleMatch({
        borderBottomColor: '#255BC7'
      }, wrapper);
    });

    it('matches the expected styles when the search is active', () => {
      const wrapper = renderWrapper({ value: 'Foo' }, mount);
      assertStyleMatch({
        borderBottomColor: '#668592'
      }, wrapper);
    });

    it('applies the expected styling to the input', () => {
      const wrapper = renderWrapper({ value: '' }, mount);
      assertStyleMatch({
        width: '375px',
        fontSize: '14px',
        fontWeight: '400'
      }, wrapper, { modifier: `${StyledInput}` });
    });

    it('applies the expected styling to the input', () => {
      const wrapper = renderWrapper({ value: '' }, mount);
      assertStyleMatch({
        top: '2px',
        color: '#668592'
      }, wrapper, { modifier: `${StyledIcon}` });
    });

    it('applies the expected styling to the input', () => {
      const wrapper = renderWrapper({ value: '' }, mount).find(StyledSearchFilterIcon);
      assertStyleMatch({
        color: '#255BC7'
      }, wrapper);
    });
  });

  describe('supports being an uncontrolled component', () => {
    it('accepts a default value', () => {
      const wrapper = renderWrapper({ defaultValue: 'Bar' }, mount);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Bar' } });
      expect(input.props().value).toEqual('Bar');
    });
  });

  describe('supports being a controlled component', () => {
    it('accepts a value and calls onChange prop', () => {
      const onChange = jest.fn();
      const wrapper = renderWrapper({ value: 'Bar', onChange }, mount);
      const input = wrapper.find('input');
      // input.simulate('change', { target: { value: 'Bar' } });
      input.simulate('change', { target: { value: 'Bar' } });
      expect(input.props().value).toEqual('Bar');
      expect(onChange).toHaveBeenCalled();
    });

    it('passes other event handlers down to the input', () => {
      const keyDownParams = { target: { selectionStart: 1, selectionEnd: 2 } };
      const onKeyDown = jest.fn();
      const wrapper = renderWrapper({ value: 'Bar', onKeyDown }, mount);
      const input = wrapper.find('input');
      input.simulate('keydown', { keyDownParams });
      expect(onKeyDown).toHaveBeenCalled();
    });

    describe('clicking the left icon', () => {
      it('calls the onChange', () => {
        act(() => {
          const onChange = jest.fn();
          const wrapper = renderWrapper({
            value: 'Tick', onChange, id: 'Search', name: 'Search'
          }, mount);
          const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
          icon.props().onClick();
          expect(onChange).toHaveBeenCalled();
        });
      });
      it('clears the input value', () => {
        const wrapper = renderWrapper({ defaultValue: 'Bar', id: 'Search', name: 'Search' }, mount);
        const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
        icon.simulate('click');
        const input = wrapper.find(Input);
        expect(input.props().value).toEqual('');
      });
    });
  });

  describe('Clicking off the component', () => {
    it('calls onBlur', () => {
      const onBlur = jest.fn();
      const wrapper = renderWrapper({ value: 'Bar', onBlur }, mount);
      const input = wrapper.find('input');
      input.simulate('blur');
      expect(onBlur).toHaveBeenCalled();
    });
  });
});

// Needs invariant for value or default //
