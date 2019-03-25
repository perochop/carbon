import React from 'react';
import PropTypes from 'prop-types';
import TextBox from '../textbox';
import I18nHelper from '../../../utils/helpers/i18n';

class Decimal extends React.Component {
  state = {
    value: '0.00'
  }

  testValue = (value) => {
    const { precision } = this.props;
    const format = I18nHelper.format();
    const del = `\\${format.delimiter}`;
    const sep = `\\${format.separator}`;

    const regex = new RegExp(`^[\\d${del}]*[${sep}{1}]?\\d{0,${precision}}?$`);
    const isGoodDecimal = regex.test(value);

    return isGoodDecimal;
  }

  handleChange = (evt) => {
    const target = evt.target;
    const { value, selectionEnd } = evt.target;
    const testString = this.testValue(value);
    
    if (testString) {
      this.setState({ value });
      this.props.onChange({ target: { value: value } })
      setTimeout(() => {
        target.setSelectionRange(selectionEnd, selectionEnd)
      });
    }
  }

  handleBlur = () => {
    const { value } = this.state;
    const addCommasRegex = /(\d)(?=(\d{3})+(?!\d))/g;
    const parts = value.split('.');
    const beforeDecimal = parts[0];
    
    let newBeforeDecimal = beforeDecimal.replace(/,/g, '');
    newBeforeDecimal = newBeforeDecimal.replace(addCommasRegex, '$1,');
    let array = [newBeforeDecimal];

    if (parts[1]) {
      array.push('.', parts[1]);
    }
    this.setState({
      value: array.join('')
    })
  }

  render() {
    return (
      <TextBox
        {...this.props}
        onChange={ this.handleChange }
        onBlur={ this.handleBlur }
        value={ this.state.value }
      />
    );
  }
};

Decimal.propTypes = {
  /**
   * The default value alignment on the input
   */
  align: PropTypes.string,
  /**
   * The decimal precision of the value in the input
   */
  precision: PropTypes.number,
  /**
   * The width of the input as a percentage
   */
  inputWidth: PropTypes.number,
  /**
   * The value of the input
   */
  value: PropTypes.string
}

Decimal.defaultProps = {
  align: 'left',
  precision: 2,
  inputWidth: 100
};


export default Decimal;
