import React from 'react';
import { GridItemStyle } from './grid-item.style';
// import PropTypes from 'prop-types';

const GridItem = (props) => {
  const {
    children,
    responsiveSettings,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd
  } = props;
  const sortedByMaxWidth = responsiveSettings.sort(
    (a, b) => (a.maxWidth < b.maxWidth) ? 1 : -1
  );
  return (
    <GridItemStyle 
      {...{
        gridColumnStart,
        gridColumnEnd,
        gridRowStart,
        gridRowEnd
      }}
      responsiveSettings={sortedByMaxWidth}
    >
      {children}
    </GridItemStyle>
  );
}

GridItem.defaultProps = {
  gridColumnStart: 1, 
  gridColumnEnd: 13,
  gridRowStart: 'auto',
  gridRowEnd: 'auto'
}

export default GridItem;