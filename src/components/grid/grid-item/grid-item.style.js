import styled, { css } from 'styled-components';

function responsiveGridItem({
  responsiveSettings,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd
}) {
  const item = responsiveSettings.map((setting) => {
    const { 
      alignSelf,
      colStart,
      colEnd,
      justifySelf,
      maxWidth,
      maxWidthUnits,
      rowStart,
      rowEnd
    } = setting;

    return css`
    margin: 0;
    grid-column-start: ${gridColumnStart};
    grid-column-end: ${gridColumnEnd};
    grid-row-start: ${gridRowStart};
    grid-row-end: ${gridRowEnd};

    @media screen and (max-width: ${maxWidth+maxWidthUnits}) {
      align-self: ${alignSelf};
      justify-self: ${justifySelf};
      grid-column-start: ${colStart};
      grid-column-end: ${colEnd};
      grid-row-start: ${rowStart};
      grid-row-end: ${rowEnd};
    }`
  })
  return item;
};

const GridItemStyle = styled.div`
  ${responsiveGridItem}
`;

export { GridItemStyle };