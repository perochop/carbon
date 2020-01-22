import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import PopoverContainerIcon from './popover-container-icon.style';
import PopoverContainerContent from './popover-container-content.component';
import Events from '../../utils/helpers/events/events';
import PopoverContainerWrapperStyle from './popover-container-wrapper.style';

const PopoverContainer = ({
  children, iconType, title, position
}) => {
  const [isOpen, setOpen] = useState(false);

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

    return null;
  };

  const renderPopoverContent = () => (
    <PopoverContainerContent
      position={ position }
      title={ title }
      onClose={ handleClose }
    >
      {children}
    </PopoverContainerContent>
  );

  return (
    <PopoverContainerWrapperStyle>
      <PopoverContainerIcon
        tabIndex={ isOpen ? -1 : 0 }
        type={ iconType }
        onClick={ handleOpen }
        onKeyDown={ handleOpenKeyDown }
      />
      {isOpen ? renderPopoverContent() : null}
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
