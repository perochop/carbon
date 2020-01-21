import React from 'react';
import PropTypes from 'prop-types';
import SettingsPopover from './settings-popover';

const TableSettings = ({
  title, onClose, isOpen, children, type
}) => {
  return (
    <SettingsPopover title={ title } type='settings'>{children}</SettingsPopover>
  );
};

TableSettings.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool
};

TableSettings.defaultProps = {
  isOpen: true
};

export default TableSettings;
