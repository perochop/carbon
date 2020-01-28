import styled from 'styled-components';
import Icon from '../icon';

const PopoverContainerIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.black};

  &:focus{
      outline: 2px solid ${({ theme }) => theme.colors.focus};
  }
    
`;

export default PopoverContainerIcon;
