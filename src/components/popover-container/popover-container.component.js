import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, Transition } from 'react-transition-group';
import Events from '../../utils/helpers/events/events';
import {
  PopoverContainerWrapperStyle,
  PopoverContainerIcon,
  PopoverContainerHeaderStyle,
  PopoverContainerContentStyle,
  PopoverContainerCloseIcon,
  PopoverContainerTitle
} from './popover-container.style';

const PopoverContainer = ({
  children, iconType, title, position
}) => {
  const [isOpen, setOpen] = useState(false);

  const closeIconRef = useRef();

  useEffect(() => {
    if (isOpen) closeIconRef.current.getTarget().focus();
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenKeyDown = (ev) => {
    if (Events.isEnterOrSpaceKey(ev)) {
      ev.preventDefault();
      handleOpen();
    }
  };

  const handleCloseKeyDown = (ev) => {
    if (Events.isEnterOrSpaceKey(ev)) {
      ev.preventDefault();
      handleClose();
    }
  };

  return (
    <PopoverContainerWrapperStyle>
      <PopoverContainerIcon
        tabIndex={ isOpen ? -1 : 0 }
        type={ iconType }
        onClick={ handleOpen }
        onKeyDown={ handleOpenKeyDown }
      />
      <Transition
        in={ isOpen }
        timeout={ { exit: 300 } }
        appear
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <PopoverContainerContentStyle animationState={ state } position={ position }>
            <PopoverContainerHeaderStyle>
              <PopoverContainerTitle>
                {title}
              </PopoverContainerTitle>
              <PopoverContainerCloseIcon
                type='close'
                tabIndex='0'
                onClick={ handleClose }
                onKeyDown={ handleCloseKeyDown }
                ref={ closeIconRef }
              />
            </PopoverContainerHeaderStyle>
            {children}
          </PopoverContainerContentStyle>
        )}
      </Transition>
    </PopoverContainerWrapperStyle>
  );
};

PopoverContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired
};

export default PopoverContainer;
