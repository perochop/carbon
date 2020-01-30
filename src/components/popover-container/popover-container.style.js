import styled from 'styled-components';
import Icon from '../icon';
import { baseTheme } from '../../style/themes';

const PopoverContainerWrapperStyle = styled.div`
  position: relative;
  border: none;
  padding: 0;
  width: 40px;
  height: 40px;
`;


const PopoverContainerIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.black};

  &:focus{
      outline: 2px solid ${({ theme }) => theme.colors.focus};
  }
`;

const PopoverContainerHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const PopoverContainerContentStyle = styled.div`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.depth1};
    padding: 16px 24px;
    min-width: 300px;
    position: absolute;
    top: 0;

    ${({ animationState }) => {
    switch (animationState) {
      case 'entering':
        return `
          opacity: 0;
          transform: translateY(-8px);
        `;
      case 'entered':
        return `
          opacity: 1; 
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1.5);
            `;
      case 'exiting':
        return `
          opacity: 0; 
          transform: translateY(-8px);
          transition: all 0.3s cubic-bezier(0.25, 0.25, 0, 1.5);
            `;
      default:
        return 'opacity: 0';
    }
  }}

    ${({ animationState }) => animationState === 'enter'}

    ${({ position }) => (position === 'right' ? 'left: 0' : 'right: 0')};
`;

const PopoverContainerCloseIcon = styled(Icon)`
    margin-right: -16px;
`;

const PopoverContainerTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

PopoverContainerContentStyle.defaultProps = {
  theme: baseTheme
};

PopoverContainerIcon.defaultProps = {
  theme: baseTheme
};

export {
  PopoverContainerWrapperStyle,
  PopoverContainerIcon,
  PopoverContainerHeaderStyle,
  PopoverContainerContentStyle,
  PopoverContainerCloseIcon,
  PopoverContainerTitle
};
