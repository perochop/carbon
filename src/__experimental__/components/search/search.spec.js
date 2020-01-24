import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Input } from '../input';
import Search from './search.component';
import { StyledSearchButton } from './search.style';
import { assertStyleMatch } from '../../../__spec_helper__/test-utils';
import StyledInput from '../input/input.style';
import StyledIcon from '../../../components/icon/icon.style';
import Icon from '../../../components/icon';
import { rootTagTest } from '../../../utils/helpers/tags/tags-specs';

describe('Search', () => {
  let wrapper, onBlur, onChange, onKeyDown;

  const renderWrapper = (props, render = shallow) => (
    render(
      <Search
        { ...props }
      />
    )
  );
  describe('styles', () => {
    fit('matches the expected styles', () => {
      assertStyleMatch({
        borderBottom: '2px solid #CCD6DA',
        display: 'inline-flex',
        fontSize: '14px',
        fontWeight: '700'
      }, renderWrapper({ value: '' }, mount));
    });

    fit('matches the expected styles when the input is focused', () => {
      wrapper = renderWrapper({ value: '' }, mount);
      const input = wrapper.find('input');
      input.simulate('focus');
      assertStyleMatch({

      }, wrapper);
    });

    it('matches the expected styles when the search is active', () => {
      wrapper = renderWrapper({ value: 'Foo' }, mount);
      assertStyleMatch({
        // borderBottomColor: '#668592'
      }, wrapper);
    });

    it('applies the expected styling to the input', () => {
      wrapper = renderWrapper({ value: '' }, mount);
      assertStyleMatch({
        width: '375px',
        fontSize: '14px',
        fontWeight: '400'
      }, wrapper, { modifier: `${StyledInput}` });
    });

    it('applies the expected styling to the input', () => {
      wrapper = renderWrapper({ value: '' }, mount);
      assertStyleMatch({
        top: '2px',
        color: '#668592'
      }, wrapper, { modifier: `${StyledIcon}` });
    });

    it('applies the expected styling to the input', () => {
      wrapper = renderWrapper({ value: '' }, mount).find(StyledSearchButton);
      assertStyleMatch({
        color: '#255BC7'
      }, wrapper);
    });
  });

  describe('supports being an uncontrolled component', () => {
    beforeEach(() => {
      onKeyDown = jest.fn();
      onChange = jest.fn();
      onBlur = jest.fn();
      wrapper = renderWrapper({
        defaultValue: 'Bar', onBlur, onChange, onKeyDown, id: 'Search', name: 'Search'
      }, mount);
    });
    it('accepts a default value', () => {
      wrapper = renderWrapper({ defaultValue: 'Bar' }, mount);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Bar' } });
      expect(input.props().value).toEqual('Bar');
    });

    describe('clicking the left icon', () => {
      it('calls the onChange', () => {
        act(() => {
          onChange = jest.fn();
          wrapper = renderWrapper({
            defaultValue: 'Tick', onChange, id: 'Search', name: 'Search'
          }, mount);
          const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
          icon.props().onClick();
          expect(onChange).toHaveBeenCalled();
        });
      });

      it('clears the input value', () => {
        wrapper = renderWrapper({
          defaultValue: 'Bar', id: 'Search', name: 'Search'
        }, mount);
        act(() => {
          const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
          icon.props().onClick();
        });
        wrapper.update();
        const input = wrapper.find(Input);
        expect(input.props().value).toEqual('');
      });
    });

    describe('Clicking off the component', () => {
      it('calls onBlur', () => {
        onBlur = jest.fn();
        wrapper = renderWrapper({ defaultValue: 'Bar', onBlur }, mount);
        const input = wrapper.find('input');
        input.simulate('blur');
        expect(onBlur).toHaveBeenCalled();
      });
    });
  });

  describe('supports being a controlled component', () => {
    beforeEach(() => {
      onKeyDown = jest.fn();
      onChange = jest.fn();
      onBlur = jest.fn();
      wrapper = renderWrapper({
        value: 'Bar', onBlur, onChange, onKeyDown, id: 'Search', name: 'Search'
      }, mount);
    });

    it('accepts a value and calls onChange prop', () => {
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Bar' } });
      expect(input.props().value).toEqual('Bar');
      expect(onChange).toHaveBeenCalled();
    });

    it('passes other event handlers down to the input', () => {
      const keyDownParams = { target: { selectionStart: 1, selectionEnd: 2 } };
      const input = wrapper.find('input');
      input.simulate('keydown', { keyDownParams });
      expect(onKeyDown).toHaveBeenCalled();
    });

    describe('clicking the left icon', () => {
      it('calls the onChange', () => {
        act(() => {
          const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
          icon.props().onClick();
          expect(onChange).toHaveBeenCalled();
        });
      });

      it('clears the input value', () => {
        act(() => {
          const icon = wrapper.find(Icon).findWhere(n => n.props().type === 'cross').hostNodes();
          icon.props().onClick();
        });
        wrapper.update();
        const input = wrapper.find(Input);
        expect(input.props().value).toEqual('');
      });
    });

    describe('Clicking off the component', () => {
      it('calls onBlur', () => {
        const input = wrapper.find('input');
        input.simulate('blur');
        expect(onBlur).toHaveBeenCalled();
      });
    });
  });

  describe('tags', () => {
    describe('on component', () => {
      const wrapperWithTags = shallow(<Search value='' />);
      it('include correct component, element and role data tags', () => {
        rootTagTest(wrapperWithTags, 'search');
      });
    });
  });
});
