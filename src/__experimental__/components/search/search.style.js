import styled, { css } from 'styled-components';
import StyledInputPresentation from '../input/input-presentation.style';
import StyledIcon from '../../../components/icon/icon.style';
import StyledButton from '../../../components/button/button.style';
import { baseTheme } from '../../../style/themes';

const StyledSearch = styled.div`
  border-bottom: 2px solid;
  ${({
    isActive, searchHasValue, searchIsActive, theme
  }) => css`
    ${!isActive && !searchHasValue && css`
      border-bottom: 2px solid ${theme.search.passive};
      ${StyledInputPresentation} {
        border: none;
      }
    `}
    ${(isActive || searchHasValue) && css`
      border-bottom: none;

      &:nth-child(1) div {
        z-index: 10;
      }
    `}
  `}

  ${({ isActive, searchIsActive }) => css`
    ${isActive && !searchIsActive && css`
      color: rgba(0, 0, 0, 0.9);
    `}
    ${!isActive && !searchIsActive && css`
      color: rgba(0, 0, 0, 0.65);
    `}
    ${searchIsActive && css`
      color: rgba(0, 0, 0, 0.9);
    `}
  `}

  display: inline-flex;
  font-size: 14px;
  font-weight: 700;

  :hover { 
    ${({ theme }) => css` 
    border-bottom-color: ${theme.search.active};
    `}
    }

  ${StyledInputPresentation} {
    width: 375px;
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 0px; 
  }
  
  ${StyledButton} {
    background-color: #255BC7;
    border-color: #255BC7;
    cursor: pointer;
    color: white;
   }

   && ${StyledButton}:focus {
     z-index: 100;
   }

  ${StyledIcon} {
    top: 2px;
    color: #668592;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

StyledSearch.defaultProps = { theme: baseTheme };
export default StyledSearch;

export const StyledSearchButton = styled.div`
  display: inline-flex;
  &&& ${StyledButton} {
    ${({ theme }) => `background-color: ${theme.search.button};`}
    ${({ theme }) => `border-color: ${theme.search.button};`}
    width: 40px;
    height: 40px;
    margin: 3px 0px;
    padding-bottom: 2px;
    :focus {
     z-index: 100;
   }
  }
`;

export const StyledButtonIcon = styled.div`
   &&& ${StyledIcon} {
     color: white;
     margin-right: 0px;
    }
`;

StyledSearchButton.defaultProps = { theme: baseTheme };
