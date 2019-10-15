import styled from 'styled-components';
import PropTypes from 'prop-types';
import classicTheme from '../../../style/themes/classic';
import InputPresentationStyle from '../input/input-presentation.style';
import dateClassicStyle from './date-classic.style';
import OptionsHelper from '../../../utils/helpers/options-helper';

const datePickerWidth = {
  large: '140px',
  medium: '135px',
  small: '120px'
};

const StyledDateInput = styled.div`
  display: inline-block;
  & ${InputPresentationStyle} {
    flex: none;
    width: ${({ size }) => (size ? datePickerWidth[size] : '135px')};
  }

  ${dateClassicStyle}
`;

StyledDateInput.propTypes = {
  size: PropTypes.oneOf(OptionsHelper.sizesRestricted)
};

StyledDateInput.defaultProps = {
  theme: classicTheme
};

export default StyledDateInput;
