import React from 'react';
import PropTypes from 'prop-types';
import SettingsPopoverStyle from './settings-popover.style';
import Icon from '../../icon';
import SettingsIcon from './settings-icon.style';
import StyledButton from './settings-button.style';
import SettingsPopoverHeaderStyle from './settings-popover-header.style';
import SettingsHeaderStyle from './settings-header.style';
import CloseIcon from './close-icon.style';

const SettingsPopover = ({ children, type, title }) => {
  return (
    <StyledButton>
      <SettingsIcon type={ type } />
      <SettingsPopoverStyle>
        <SettingsPopoverHeaderStyle>
          <SettingsHeaderStyle>
            {title}
          </SettingsHeaderStyle>
          <CloseIcon type='close' />
        </SettingsPopoverHeaderStyle>
        {children}
      </SettingsPopoverStyle>
    </StyledButton>

  );
};

SettingsPopover.propTypes = {
  children: PropTypes.node,
  title: PropTypes.title,
  // todo: need to rewrite
  type: PropTypes.string.isRequired
};

SettingsPopover.propTypes = {

};

export default SettingsPopover;
