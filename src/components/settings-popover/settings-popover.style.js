import styled, { css } from 'styled-components';
import { baseTheme } from '../../style/themes';

const SettingsPopoverStyle = styled.div`
  ${({ theme }) => theme && css`
    background: ${theme.colors.white};
    width: 300px;
    box-shadow: ${theme.shadows.depth1};
    padding: 16px 24px;
    position: absolute;
    top: 0;

    ${({ position }) => (position === 'right' ? 'left: 0' : 'right: 0')}
  `}
`;

SettingsPopoverStyle.defaultProps = {
  theme: baseTheme
};

export default SettingsPopoverStyle;
