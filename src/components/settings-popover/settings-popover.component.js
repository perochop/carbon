import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SettingsIcon from './settings-icon.style';
import SettingsPopoverWrapper from './settings-popover-wrapper.style';
import SettingsPopoverContent from './settings-popover-content.component';
import Events from '../../utils/helpers/events/events';

const SettingsPopover = ({
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

  const renderSettingsContent = () => (
    <SettingsPopoverContent
      position={ position }
      title={ title }
      onClose={ handleClose }
    >
      {children}
    </SettingsPopoverContent>
  );

  return (
    <SettingsPopoverWrapper>
      <SettingsIcon
        tabIndex={ isOpen ? -1 : 0 }
        type={ iconType }
        onClick={ handleOpen }
        onKeyDown={ handleOpenKeyDown }
      />
      {isOpen ? renderSettingsContent() : null}
    </SettingsPopoverWrapper>
  );
};

SettingsPopover.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired
};

export default SettingsPopover;
