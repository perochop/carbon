import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import StyledSearch, { StyledSearchButton, StyledButtonIcon } from './search.style';
import Icon from '../../../components/icon';
import Textbox from '../textbox';
import Button from '../../../components/button';

const Search = ({
  defaultValue, onChange, value, id, name, threshold, searchButton, placeholder, ...rest
}) => {
  const isControlled = value !== undefined;
  const initialValue = isControlled ? value : defaultValue;
  invariant(
    typeof initialValue === 'string',
    'This component has no initial value'
  );
  let inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState(initialValue);
  const [isActive, setIsActive] = useState(inputRef.current === document.activeElement);
  const [searchIsActive, setSearchIsActive] = useState(initialValue.length >= threshold);
  const [iconType, setIconType] = useState(null);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    setSearchValue(e.target.value);
  };

  const handleOnFocus = () => {
    setIsActive(true);
  };

  const handleClick = (ev) => {
    if (onChange) {
      onChange(ev);
    }
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
    setSearchIsActive(searchValue.length >= threshold);
    if (searchValue.length > 0) {
      setIconType('cross');
    } else if (searchButton && isActive) {
      setIconType('');
    } else {
      setIconType('search');
    }
  }, [isActive, searchButton, searchIsActive, searchValue, threshold]);

  return (
    <StyledSearch
      onFocus={ handleOnFocus }
      onClick={ handleOnFocus }
      onBlur={ handleBlur }
      onChange={ handleChange }
      isActive={ isActive }
      searchIsActive={ searchIsActive }
      id={ id }
      data-component='search'
      name={ name }
      searchHasValue={ searchValue && searchValue.length }
      hasSearchButton={ Boolean(searchButton) }
    >
      <Textbox
        { ...rest }
        placeholder={ placeholder }
        value={ searchValue }
        inputRef={ (el) => { inputRef = el; } }
        inputIcon={ iconType }
        // iconOnClick={ handleIconClick } // Inprep for being unblocked.
      />
      {(searchButton && (
        <StyledSearchButton>
          {(isActive || searchIsActive) && (
            <Button
              size='small'
              handleClick={ handleClick }
            >

              <StyledButtonIcon>
                <Icon type='search' />
              </StyledButtonIcon>

            </Button>
          )}
        </StyledSearchButton>
      ))}
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
  name: PropTypes.string,
  /** Prop for active search threshold */
  threshold: PropTypes.number,
  /** Prop for placeholder */
  placeholder: PropTypes.string
};

Search.defaultProps = { threshold: 3 };

export default Search;
