import React from 'react';
import PropTypes from 'prop-types';
import StyledTableCell from './table-cell.style';
import TextArea from '../../../__experimental__/components/textarea';
import { validProps } from '../../../utils/ether';
import tagComponent from '../../../utils/helpers/tags';
import OptionsHelper from '../../../utils/helpers/options-helper';

/**
 * A TableCell widget.
 *
 * == How to use a TableCell in a component:
 *
 * See documentation for Table component.
 *
 * You can set a property of 'align' which should be a string. This will
 * align the content to either "left", "center" or "right".
 *
 * You can set a property of 'action' which should be a boolean. This will
 * set styling options for the cell used for action such as delete.
 */
class TableCell extends React.Component {
  /**
   * Returns the child's name if there is one.
   */
  childName(child) {
    return (child && child.type) ? child.type.name : null;
  }

  /**
   * Returns if child element is Textarea.
   */
  childrenHasTextArea() {
    const { children } = this.props;

    if (!Array.isArray(children)) {
      return this.childName(children) === TextArea.name;
    }

    let result = false;
    children.forEach((child) => {
      if (this.childName(child) === TextArea.name) {
        result = true;
      }
    });
    return result;
  }

  /**
   * Returns props to be used on the TD element.
   */
  get tableCellProps() {
    const { children, ...props } = validProps(this, ['align', 'size']);
    props.isTextArea = this.childrenHasTextArea();
    return props;
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <StyledTableCell { ...this.tableCellProps } { ...tagComponent('table-cell', this.props) }>
        { this.props.children }
      </StyledTableCell>
    );
  }
}

TableCell.propTypes = {
  /** Defines the cell type to be an action - used for the delete cell. */
  action: PropTypes.bool,

  /** Defines the alignment of the cell (eg "left", "center" or "right"). */
  align: PropTypes.oneOf(OptionsHelper.alignFull),

  /** Children elements */
  children: PropTypes.node,

  /** Defines the height of a cell used to size an input for example */
  size: PropTypes.oneOf(OptionsHelper.tableSizes)
};

TableCell.defaultProps = {
  align: 'left'
};

export default TableCell;