import styled from 'styled-components';
import { baseTheme } from '../../style/themes';
import Icon from '../icon';

const StyledDraggableItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.draggableCheckbox.border};
  padding: 8px 0;
  cursor: move;

  opacity: ${({ opacity }) => opacity};
`;

const StyledIcon = styled(Icon)`
  margin-left: auto;
`;

StyledDraggableItem.defaultProps = {
  theme: baseTheme
};

export { StyledDraggableItem, StyledIcon };
