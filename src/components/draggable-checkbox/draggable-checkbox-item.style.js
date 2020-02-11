import styled from 'styled-components';

const DraggableItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.draggableCheckbox.border};
  padding: 8px 0;
  cursor: move;

  opacity: ${({ opacity }) => opacity};
`;

export default DraggableItemStyle;
