import React from 'react';
import PropTypes from 'prop-types';
import SettingsPopoverHeaderStyle from './settings-popover-header.style';
import SettingsHeaderStyle from './settings-header.style';
import CloseIcon from './close-icon.style';
import SettingsPopoverStyle from './settings-popover.style';
import Events from '../../../utils/helpers/events';

const SettingsPopoverContent = ({ onClose, children, title }) => {
  const handleKeyDown = (ev) => {
    if (Events.isEnterOrSpaceKey) {
      ev.stopPropagation();
      onClose();
    }

    return null;
  };

  return (
    <SettingsPopoverStyle>
      <SettingsPopoverHeaderStyle>
        <SettingsHeaderStyle>
          {title}
        </SettingsHeaderStyle>
        <CloseIcon
          type='close'
          tabIndex='0'
          onClick={ onClose }
          onKeyDown={ handleKeyDown }
        />
      </SettingsPopoverHeaderStyle>
      {children}
    </SettingsPopoverStyle>
  );
};

SettingsPopoverContent.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default SettingsPopoverContent;
