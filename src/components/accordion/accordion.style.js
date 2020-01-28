import styled, { css } from 'styled-components';

import Icon from '../icon';
import { baseTheme } from '../../style/themes';

const StyledAccordionContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding:  ${({ accordionPadding, theme }) => theme.spacing * accordionPadding}px;
  background-color: ${({ type, theme }) => (type === 'primary' ? theme.colors.white : 'transparent')};
  ${({ type, theme }) => (type === 'primary' && css`border: 1px solid ${theme.accordion.border}`)};

  & + & {
    margin-top: -1px;
    border-top: 1px solid ${({ theme }) => theme.accordion.border};
    border-bottom: 1px solid ${({ theme }) => theme.accordion.border};
  }
`;

const StyledAccordionTitle = styled.h3`
  font-weight: 900;
  line-height: 1;
  font-size: ${({ headingSize }) => headingSize}px;
  user-select: none;
  margin: 0;
`;

const StyledAccordionIcon = styled(Icon)`
  font-size: 25px;
  transition: transform 0.3s;
  margin-right: ${({ iconRightMargin, theme }) => (iconRightMargin ? theme.spacing * iconRightMargin : 0)}px;
  ${({ isExpanded }) => isExpanded && 'transform: rotate(-180deg)'};
`;

const StyledAccordionTitleContainer = styled.div`
  padding: ${({ headerPadding, theme }) => theme.spacing * headerPadding}px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: ${({ iconAlign }) => (iconAlign === 'left' ? 'start' : 'space-between')};
  cursor: pointer;
  ${({ headerPadding, headerMarginLeft, theme }) => (
    headerMarginLeft && `margin-left: calc(${headerMarginLeft}% - ${headerPadding * theme.spacing}px)`
  )};
  z-index: 1;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
  }

  &:hover {
    background-color: ${({ theme }) => theme.accordion.background};

    ${StyledAccordionTitle} {
      text-decoration: underline;
    }
  }
`;

const StyledAccordionContentContainer = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s;
  ${({ isExpanded }) => !isExpanded && 'visibility: hidden'};
`;

const getPadding = (dir, value, theme) => Number.isInteger(value) && `padding-${dir}: ${theme.spacing * value}px`;
const StyledAccordionContent = styled.div`
  padding: ${({ contentPadding, theme }) => theme.spacing * contentPadding}px;
  ${({ contentPaddingLeft, theme }) => getPadding('left', contentPaddingLeft, theme)};
  ${({ contentPaddingRight, theme }) => getPadding('right', contentPaddingRight, theme)};
  ${({ contentPaddingTop, theme }) => getPadding('top', contentPaddingTop, theme)};
  ${({ contentPaddingBottom, theme }) => getPadding('bottom', contentPaddingBottom, theme)};
`;

StyledAccordionContainer.defaultProps = {
  theme: baseTheme
};
StyledAccordionTitleContainer.defaultProps = {
  theme: baseTheme
};
StyledAccordionTitle.defaultProps = {
  theme: baseTheme
};
StyledAccordionIcon.defaultProps = {
  theme: baseTheme
};
StyledAccordionContent.defaultProps = {
  theme: baseTheme
};
StyledAccordionContentContainer.defaultProps = {
  theme: baseTheme
};

export {
  StyledAccordionContainer,
  StyledAccordionTitleContainer,
  StyledAccordionTitle,
  StyledAccordionIcon,
  StyledAccordionContent,
  StyledAccordionContentContainer
};
