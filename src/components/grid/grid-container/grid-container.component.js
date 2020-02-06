import React from 'react';
import { GridContainerStyle } from './grid-container.style';
// import PropTypes from 'prop-types';

const GridContainer = (props) => {
  const { 
    children
  } = props;
  return (
    <GridContainerStyle>
      {children}
    </GridContainerStyle>
  );
}

export default GridContainer;