import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import StyledSearch, { StyledSearchFilterIcon } from './search.style';
import Icon from '../../../components/icon';
import { Input } from '../input';

const Search = ({
  defaultValue, onChange, value, id, name, ...rest
}) => {
  const isControlled = value !== undefined;
  const initialValue = isControlled ? value : defaultValue;
  invariant(
    typeof initialValue === 'string',
    'Controlled component: Mismatch between props: `enableMultiSelect` '
  );
  let inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState(initialValue);
  const [isActive, setIsActive] = useState(inputRef.current === document.activeElement);
  const [searchIsActive, setSearchIsActive] = useState(initialValue.length > 0);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    if (!isControlled) {
      setSearchValue(e.target.value);
    }
  };

  const handleOnFocus = () => {
    setIsActive(true);
  };

  const handleIconClick = () => {
    setSearchValue('');
    if (onChange) {
      onChange({
        target: {
          ...(name && { name }),
          ...(id && { id }),
          value: ''
        }
      });
    }
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isControlled && value !== searchValue) {
      setSearchValue(value);
    }
    setSearchIsActive(searchValue.length > 0);
  }, [isControlled, value, searchIsActive, searchValue]);

  return (
    <StyledSearch
      onFocus={ handleOnFocus }
      onBlur={ handleBlur }
      onChange={ handleChange }
      isActive={ isActive }
      searchIsActive={ searchIsActive }
      id={ id }
      name={ name }
    >
      <Icon
        onClick={ handleIconClick }
        type={ searchIsActive ? 'cross' : 'search' }
      />
      <Input
        { ...rest }
        value={ searchValue }
        inputRef={ (el) => { inputRef = el; } }
      />
      <StyledSearchFilterIcon iconActive={ searchIsActive }>
        <Icon
          type='filter_new'
        />
      Filter
      </StyledSearchFilterIcon>
    </StyledSearch>
  );
};

Search.propTypes = {
  /** Prop for `uncontrolled` use */
  defaultValue: PropTypes.string,
  /** Prop for `controlled` use */
  value: PropTypes.string,
  /** Prop for `onChange` events */
  onChange: PropTypes.func,
  /** Prop for `onKeyDown` events */
  onKeyDown: PropTypes.func,
  /** Prop boolean to state whether the `search` icon renders */
  searchButton: PropTypes.bool,
  /** Prop for `onBlur` events */
  onBlur: PropTypes.func,
  /** Prop for `id` events */
  id: PropTypes.string,
  /** Prop for `name` events */
  name: PropTypes.func
};

export default Search;
