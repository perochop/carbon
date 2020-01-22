import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './close-icon.style';
import PopoverContainerContentStyle from './popover-container-content.style';
import Events from '../../utils/helpers/events/events';
import PopoverContainerHeaderStyle from './popover-container-header.style';
import Title from './title.style';

const PopoverContainerContent = ({
  onClose, children, title, position
}) => {
  const handleCloseKeyDown = (ev) => {
    if (Events.isEnterOrSpaceKey(ev)) {
      ev.preventDefault();
      onClose();
    }

    return null;
  };

  return (
    <PopoverContainerContentStyle position={ position }>
      <PopoverContainerHeaderStyle>
        <Title>
          {title}
        </Title>
        <CloseIcon
          type='close'
          tabIndex='0'
          onClick={ onClose }
          onKeyDown={ handleCloseKeyDown }
        />
      </PopoverContainerHeaderStyle>
      {children}
    </PopoverContainerContentStyle>
  );
};

PopoverContainerContent.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PopoverContainerContent;
