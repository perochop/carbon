import styled, { css } from 'styled-components';
import StyledInputPresentation from '../input/input-presentation.style';
import StyledIcon from '../../../components/icon/icon.style';
import StyledButton from '../../../components/button/button.style';
import { baseTheme } from '../../../style/themes';
import StyledFormField from '../form-field/form-field.style';

const StyledSearch = styled.div`
  ${({ theme }) => `border-bottom: 1px solid ${theme.search.passive};`}
  ${({ isActive, searchHasValue }) => css`
    ${!isActive && !searchHasValue && css`
      ${StyledInputPresentation} {
        border: 1px solid transparent;
        color: rgba(0, 0, 0, 0.65);
      }
    `}
    ${(isActive || searchHasValue) && css`
      border-bottom: 1px solid transparent;
      transition: border 0.2s ease, background 0.2s ease;
      color: rgba(0, 0, 0, 0.9);
    `}
  `}

  ${({ isActive, searchIsActive }) => css`
    ${isActive && !searchIsActive && css`
      color: rgba(0, 0, 0, 0.9);
    `}
  `}

  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0px;
  transition: border 0.2s ease, background 0.2s ease;
  :hover {
    ${({ theme }) => css` 
    border-bottom-color: ${theme.search.active};`}
    cursor: pointer;
  }

  ${StyledInputPresentation} {
    width: ${
  ({ hasSearchButton, isActive, searchIsActive }) => (
    hasSearchButton && (isActive || searchIsActive) ? '335px;' : '375px;'
  )};
  
    font-size: 14px;
    font-weight: 700;
    padding-bottom: 2px;
    padding-top: 1px; 
    cursor: pointer;
  }

  ${StyledFormField} { 
    z-index: 10;
  }

  ${StyledButton} { 
    background-color: #255BC7;
    cursor: pointer;
    color: white;
  }

  ${StyledIcon} {
    margin: -1px -1px;
    color: #668592;
    width: 20px;
    height: 20px;
    cursor: pointer;
    :hover {
      color: rgba(0, 0, 0, 0.65);
    };
  }
`;

StyledSearch.defaultProps = { theme: baseTheme };
export default StyledSearch;

export const StyledSearchButton = styled.div` 
  display: inline-flex;
  border-bottom: 1px solid transparent;

  &&& ${StyledButton} {
    ${({ theme }) => `background-color: ${theme.search.button};`}
    ${({ theme }) => `border-color: ${theme.search.button};`}
    width: 43px;
    height: 43px;
    margin: 0px 0px;
    padding-bottom: 3px;
    transition: border 0.2s ease, background 0.2s ease;
    :focus {
     z-index: 10;
   }
  }`;

export const StyledButtonIcon = styled.div`
   &&& ${StyledIcon} {
     color: white;
     margin-right: 0px;
    }
`;

StyledSearchButton.defaultProps = { theme: baseTheme };
