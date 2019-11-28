import React from 'react';
import { CSSTransition } from 'react-transition-group';
import tagComponent from '../../../utils/helpers/tags/tags';
import { SlideStyle } from './slide.style';
import '../slide.config.js';

const Slide = (props) => {
  console.log(props.transitionName);
  return (
    <CSSTransition
      className='carbon-carousel__transition'
      classNames={ props.transitionName }
      timeout={ { enter: 750, exit: 750 } }
    >
      <SlideStyle { ...props } { ...tagComponent('slide', props) } />
    </CSSTransition>
  );
};

export default Slide;
