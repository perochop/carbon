import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SettingsIcon from './settings-icon.style';
import SettingsPopoverWrapper from './settings-popover-wrapper.style';
import SettingsPopoverContent from './settings-popover-content.component';
import Events from '../../../utils/helpers/events';

const SettingsPopover = ({
  children, type, title
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (ev) => {
    if (Events.isEnterKey(ev) || Events.isSpaceKey(ev)) {
      ev.stopPropagation();
      handleOpen();
    }

    return null;
  };

  const renderSettingsContent = () => (
    <SettingsPopoverContent
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
        type={ type }
        onClick={ handleOpen }
        onKeyDown={ handleKeyDown }
      />
      {isOpen ? renderSettingsContent() : null}
    </SettingsPopoverWrapper>
  );
};

SettingsPopover.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default SettingsPopover;
