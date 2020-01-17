import styled, { css } from 'styled-components';
import StyledInput from '../input/input.style';
import StyledIcon from '../../../components/icon/icon.style';
import { baseTheme } from '../../../style/themes';

const StyledSearch = styled.div`
  border-bottom: 2px solid;
  ${({ isActive, searchIsActive, theme }) => css`
    ${isActive && !searchIsActive && css`
      border-bottom-color: ${theme.search.active};
    `}
    ${!isActive && !searchIsActive && css`
      border-bottom-color: ${theme.search.passive};
    `}
    ${searchIsActive && css`
      border-bottom-color: ${theme.search.searchActive};
    `}
  `}
  display: inline-flex;
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
 
  ${StyledInput} {
    width: 375px;
    font-size: 14px;
    font-weight: 400;
  }

  ${StyledIcon} {
    top: 2px;
    color: #668592;
    cursor: pointer;
  }
`;

StyledSearch.defaultProps = { theme: baseTheme };
export default StyledSearch;

export const StyledSearchFilterIcon = styled.div`
  &, ${StyledIcon} {
    ${({ theme }) => `color: ${theme.search.active};`}
  }
`;
StyledSearchFilterIcon.defaultProps = { theme: baseTheme };
