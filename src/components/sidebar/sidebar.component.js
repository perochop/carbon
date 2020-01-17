import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Modal from '../modal';
import { SidebarStyle, SidebarCloseStyle } from './sidebar.style';
import './sidebar.scss';
import FocusTrap from '../../utils/helpers/focus-trap';
import Events from '../../utils/helpers/events/events';

class Sidebar extends Modal {
  /** Returns classes for the component. */
  get mainClasses() {
    return classNames(
      'carbon-sidebar',
      this.props.className
    );
  }

  /** Returns the markup for the close icon. */
  get closeButton() {
    if (this.props.onCancel) {
      return (
        <SidebarCloseStyle>
          <Icon
            className='carbon-sidebar__close-icon'
            data-element='close'
            onClick={ this.props.onCancel }
            type='close'
            tabIndex='0'
            onKeyDown={ ev => (Events.isEnterKey(ev) ? this.props.onCancel() : null) }
          />
        </SidebarCloseStyle>
      );
    }
    return null;
  }

  onOpening() {
    this.focusTrap = new FocusTrap(this.sideBarRef);

    if (!this.props.enableBackgroundUI) {
      this.focusTrap.setFocusTrap();
    } else {
      this.focusTrap.setFocusToFirstFocusableElement();
    }
  }

  get onClosing() {
    this.focusTrap.removeFocusTrap();

    return null;
  }

  componentTags(props) {
    return {
      'data-component': 'sidebar',
      'data-element': props['data-element'],
      'data-role': props['data-role']
    };
  }

  /** Returns the computed HTML for the sidebar. */
  get modalHTML() {
    return (
      <SidebarStyle
        ref={ (element) => { this.sideBarRef = element; } }
        position={ this.props.position }
        size={ this.props.size }
        data-element='sidebar'
      >
        {this.closeButton}
        {this.props.children}
      </SidebarStyle>
    );
  }

  get transitionName() {
    return `sidebar--${this.props.position}`;
  }
}

Sidebar.propTypes = {
  onCancel: PropTypes.func,
  /** A boolean to track the open state of the dialog */
  open: PropTypes.bool,
  /** Set this prop to false to hide the translucent background when the dialog is open. */
  enableBackgroundUI: PropTypes.bool,
  /** Sets the position of sidebar, either left or right. */
  position: PropTypes.string,
  /** Sets the size of the sidebar when open. */
  size: PropTypes.string
};

Sidebar.defaultProps = {
  position: 'right',
  size: 'medium',
  open: false,
  enableBackgroundUI: false
};

export default Sidebar;
