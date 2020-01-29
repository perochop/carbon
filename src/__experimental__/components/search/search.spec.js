import React from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Input } from '../input';
import Search from './search.component';
import { StyledSearchButton } from './search.style';
import { assertStyleMatch } from '../../../__spec_helper__/test-utils';
import StyledTextInput from '../input/input-presentation.style';
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
    it('matches the expected styles', () => {
      assertStyleMatch({
        borderBottom: '1px solid #CCD6DA',
        display: 'inline-flex',
        fontSize: '14px',
        fontWeight: '700'
      }, renderWrapper({ value: '' }, mount));
    });

    it('matches the expected styles when the input is focused', () => {
      wrapper = renderWrapper({ value: '' }, mount);
      const input = wrapper.find('input');
      input.simulate('focus');
      assertStyleMatch({
        borderBottom: '1px solid transparent'
      }, wrapper);
    });

    it('matches the expected styles when the search is active', () => {
      wrapper = renderWrapper({ value: 'Foo' }, mount);
      assertStyleMatch({
        borderBottom: '1px solid transparent',
        color: 'rgba(0,0,0,0.9)'
      }, wrapper);
    });

    it('applies the expected styling to the input', () => {
      wrapper = renderWrapper({ value: '' }, mount);
      assertStyleMatch({
        width: '375px',
        fontSize: '14px',
        fontWeight: '700'
      }, wrapper, { modifier: `${StyledTextInput}` });
    });

    it('applies the expected styling to the search button', () => {
      wrapper = renderWrapper({ value: 'FooBar', searchButton: true }, mount).find(StyledSearchButton);
      assertStyleMatch({
        display: 'inline-flex',
        borderBottom: '1px solid transparent'
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

    describe('clicking the textbox icon', () => {
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

    describe('clicking the textbox icon', () => {
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
