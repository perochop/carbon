import styled, { css } from 'styled-components';
import { baseTheme } from '../../style/themes';

const PopoverContainerContentStyle = styled.div`
  ${({ theme }) => theme && css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.depth1};
    padding: 16px 24px;
    min-width: 300px;
    position: absolute;
    top: 0;

    ${({ position }) => (position === 'right' ? 'left: 0' : 'right: 0')}
  `}
`;

PopoverContainerContentStyle.defaultProps = {
  theme: baseTheme
};

export default PopoverContainerContentStyle;
