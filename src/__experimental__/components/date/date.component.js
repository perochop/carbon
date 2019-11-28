import React from 'react';
import PropTypes from 'prop-types';
import Events from '../../../utils/helpers/events';
import DateHelper from '../../../utils/helpers/date';
import DateValidator from '../../../utils/validations/date';
import tagComponent from '../../../utils/helpers/tags';
import DatePicker from './date-picker.component';
import StyledDateInput from './date.style';
import Textbox from '../textbox';
import withUniqueIdProps from '../../../utils/helpers/with-unique-id-props';
import { isEdge } from '../../../utils/helpers/browser-type-check';

const defaultDateFormat = 'DD/MM/YYYY';

class BaseDateInput extends React.Component {
  isBlurBlocked = false;

  isOpening = false;

  inputHasFocus = this.props.autoFocus || false;

  isControlled = this.props.value !== undefined;

  adjustedValue = DateHelper.isValidDate(this.props.value) ? this.props.value : DateHelper.todayFormatted();

  initialVisibleValue = this.isControlled ? this.adjustedValue : this.props.defaultValue;

  inputFocusedViaPicker = false;

  state = {
    isDatePickerOpen: false,
    /** Date object to pass to the DatePicker */
    selectedDate: DateHelper.stringToDate(isoFormattedValueString(this.initialVisibleValue)),
    /** Displayed value, format dependent on a region */
    visibleValue: DateHelper.formatDateToCurrentLocale(this.initialVisibleValue),
    /** Stores last valid values to be emitted onBlur if current input is invalid */
    lastValidEventValues: {
      formattedValue: DateHelper.formatDateToCurrentLocale(this.initialVisibleValue),
      rawValue: isoFormattedValueString(this.initialVisibleValue)
    }
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      this.isAutoFocused = true;
      this.input.focus();
      this.openDatePicker(true);
    }
    this.handleValidationUpdate();
  }

  componentDidUpdate(prevProps) {
    if (this.isControlled && !this.inputHasFocus && this.hasValueChanged(prevProps)) {
      this.updateSelectedDate(this.props.value);
    }

    if (this.hasValidationsChanged()) {
      this.handleValidationUpdate();
    }
  }

  inputProps = () => {
    const { minDate, maxDate, ...inputProps } = this.props;
    return inputProps;
  }

  hasValueChanged = (prevProps) => {
    return this.props.value && prevProps.value !== this.props.value;
  };

  hasValidationsChanged = () => {
    const { validationsArray } = this.state;

    const currentValidations = concatAllValidations(this.inputProps());

    if (validationsArray.length !== currentValidations.length) {
      return true;
    }

    if (validationsArray.some((val, index) => val !== currentValidations[index])) {
      return true;
    }

    return false;
  }

  handleValidationUpdate = () => {
    const inputProps = this.inputProps();
    this.setState({ validationsArray: concatAllValidations(inputProps) });
  }

  assignInput = (input) => {
    this.input = input.current;
  };

  shouldAllowBlur = () => {
    return isEdge(navigator) && !this.inputFocusedViaPicker;
  }

  shouldBlockBlur = () => {
    const { disabled, readOnly } = this.props;
    const block = this.isBlurBlocked || this.inputFocusedViaPicker || this.input === document.activeElement;
    if (disabled || readOnly || block) {
      this.inputFocusedViaPicker = this.input === document.activeElement;
      // needed to block blur properly in Edge
      if (!this.shouldAllowBlur()) {
        return true;
      }
    }
    return false;
  }

  handleBlur = () => {
    // needed to make blur work properly in Edge
    // https://stackoverflow.com/a/24695316/10894881
    setTimeout(() => {
      this.inputHasFocus = false;

      if (this.shouldBlockBlur()) {
        return;
      }

      this.reformatVisibleDate();

      if (this.props.onBlur && !this.state.isDatePickerOpen) {
        const dateWithSlashes = DateHelper.sanitizeDateInput(this.state.visibleValue);
        const event = this.buildCustomEvent({ target: this.input }, isoFormattedValueString(dateWithSlashes));
        this.props.onBlur(event);
      }
    }, 0);
  }

  handleFocus = (ev) => {
    this.inputHasFocus = true;
    const { disabled, readOnly } = this.props;

    if (disabled || readOnly) return;

    if (this.isAutoFocused) {
      this.isAutoFocused = false;
    } else {
      this.openDatePicker();
    }

    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }
  };

  handleTabKeyDown = (ev) => {
    if (Events.isTabKey(ev)) {
      this.isOpening = false;
      this.inputFocusedViaPicker = false;
      this.closeDatePicker();
    }
  };

  openDatePicker = (openedOnMount) => {
    document.addEventListener('click', this.closeDatePicker);

    if (!openedOnMount && this.inputFocusedViaPicker) {
      this.isBlurBlocked = true;
      return;
    }
    this.updateSelectedDate(this.props.value || isoFormattedValueString(this.state.visibleValue));
    this.setState({ isDatePickerOpen: true });
  };

  updateValidEventValues = (value) => {
    this.setState({
      visibleValue: DateHelper.formatDateToCurrentLocale(value),
      lastValidEventValues: {
        formattedValue: DateHelper.formatDateToCurrentLocale(value),
        rawValue: isoFormattedValueString(value)
      }
    });
  }

   reformatVisibleDate = () => {
     const { lastValidEventValues, visibleValue } = this.state;
     if (DateHelper.isValidDate(visibleValue)) {
       this.updateValidEventValues(visibleValue);
     } else if (!visibleValue.length) {
       this.updateValidEventValues(lastValidEventValues.formattedValue);
     }
   }

  closeDatePicker = () => {
    if (this.isOpening) {
      this.isOpening = false;
      return;
    }
    document.removeEventListener('click', this.closeDatePicker);
    this.setState({ isDatePickerOpen: false }, () => {
      this.isBlurBlocked = false;
      if (this.input !== document.activeElement) {
        this.handleBlur();
      }
    });
  };

  handleDateSelect = (selectedDate) => {
    const stringDateIso = DateHelper.formatDateString(selectedDate);
    this.isBlurBlocked = true;
    this.isOpening = false;
    this.updateVisibleValue(stringDateIso);
  };

  updateVisibleValue = (date) => {
    const visibleValue = DateHelper.formatDateToCurrentLocale(date);
    const newDate = this.getDateObject(date);

    this.setState({
      selectedDate: newDate
    },
    () => {
      this.updateValidEventValues(visibleValue);
      const event = { target: this.input };
      event.target.value = visibleValue;
      this.emitOnChangeCallback(event, date);
      this.focusInput();
    });
  };

  focusInput = () => {
    this.inputFocusedViaPicker = true;
    this.isOpening = false;
    this.closeDatePicker();
    this.input.focus();
    this.isBlurBlocked = false;
  }

  handleVisibleInputChange = (ev) => {
    const { disabled, readOnly } = this.props;
    const value = ev.target.value.formattedValue || ev.target.value;
    const dateWithSlashes = DateHelper.sanitizeDateInput(value);
    const isValidDate = DateHelper.isValidDate(dateWithSlashes);
    let isoDateString;

    if (disabled || readOnly) return;

    this.isBlurBlocked = false;

    if (isValidDate) {
      isoDateString = isoFormattedValueString(dateWithSlashes);
      this.updateSelectedDate(isoDateString);
      this.emitOnChangeCallback(ev, isoDateString);
    }

    this.setState({ visibleValue: value });
  };

  updateSelectedDate = (newValue) => {
    const newDate = this.getDateObject(newValue);

    this.setState({ selectedDate: newDate });
  };

  getDateObject = (newValue) => {
    let newDate = DateHelper.stringToDate(isoFormattedValueString(newValue));
    const isNewDateInvalid = !newDate.getDate();

    if (isNewDateInvalid) {
      newDate = DateHelper.stringToDate(DateHelper.todayFormatted());
    }

    return newDate;
  };

  emitOnChangeCallback = (ev, isoFormattedValue) => {
    if (this.props.onChange) {
      const event = this.buildCustomEvent(ev, isoFormattedValue);
      this.props.onChange(event);
    }
  };

  buildCustomEvent = (ev, isoFormattedValue) => {
    const { id, name, value } = ev.target;
    const { lastValidEventValues } = this.state;
    const validRawValue = DateHelper.isValidDate(isoFormattedValue);

    ev.target = {
      ...(name && { name }),
      ...(id && { id }),
      value: {
        ...lastValidEventValues,
        ...(validRawValue && { formattedValue: DateHelper.formatDateToCurrentLocale(value) }),
        ...(validRawValue && { rawValue: isoFormattedValue })
      }
    };
    return ev;
  }

  renderDatePicker = (dateRangeProps) => {
    if (!this.state.isDatePickerOpen) return null;

    const { visibleValue, lastValidEventValues } = this.state;
    const inputDate = DateHelper.isValidDate(visibleValue) ? visibleValue : lastValidEventValues.formattedValue;
    return (
      <DatePicker
        inputElement={ this.input && this.input.parentElement }
        selectedDate={ this.state.selectedDate }
        handleDateSelect={ this.handleDateSelect }
        inputDate={ inputDate }
        { ...dateRangeProps }
      />
    );
  }

  markCurrentDatepicker = () => {
    if (this.props.disabled || this.props.readOnly) return;
    this.isOpening = true;
    this.inputFocusedViaPicker = false;
    this.isBlurBlocked = true;
    this.openDatePicker();
  }

  render() {
    const {
      minDate, maxDate, isDateRange, ...inputProps
    } = this.props;

    let events = {};
    delete inputProps.autoFocus;
    delete inputProps.defaultValue;
    delete inputProps.value;

    events = {
      onBlur: this.handleBlur,
      onChange: this.handleVisibleInputChange,
      onFocus: this.handleFocus,
      onKeyDown: this.handleTabKeyDown
    };

    const validations = isDateRange ? concatAllValidations(inputProps) : this.state.validationsArray;

    return (
      <StyledDateInput
        onClick={ this.markCurrentDatepicker }
        role='presentation'
        size={ inputProps.size }
        { ...tagComponent('date', this.props) }
      >
        <Textbox
          { ...inputProps }
          validations={ validations }
          inputIcon='calendar'
          value={ this.state.visibleValue }
          rawValue={ isoFormattedValueString(this.state.visibleValue) }
          inputRef={ this.assignInput }
          { ...events }
        />
        { this.renderDatePicker({ minDate, maxDate }) }
      </StyledDateInput>
    );
  }
}

function concatAllValidations(props) {
  if (!props.validations) props.validations = [];
  if (typeof props.validations === 'function') props.validations = [props.validations];

  return [...props.validations, ...props.internalValidations];
}

function isoFormattedValueString(valueToFormat) {
  return DateHelper.formatValue(valueToFormat);
}

const DateInput = withUniqueIdProps(BaseDateInput);

BaseDateInput.propTypes = {
  ...Textbox.propTypes,
  /** Automatically focus on component mount */
  autoFocus: PropTypes.bool,
  /** Used to provide additional validations on composed components */
  internalValidations: PropTypes.array,
  /** Minimum possible date YYYY-MM-DD */
  minDate: PropTypes.string,
  /** Maximum possible date YYYY-MM-DD */
  maxDate: PropTypes.string,
  /** Specify a callback triggered on blur */
  onBlur: PropTypes.func,
  /** Specify a callback triggered on change */
  onChange: PropTypes.func,
  /** Specify a callback triggered on focus */
  onFocus: PropTypes.func,
  /** Name of the input */
  name: PropTypes.string,
  /** The current date YYYY-MM-DD */
  value: PropTypes.string,
  /** Triggers textbox validation when it's boolean value changes */
  forceUpdateTriggerToggle: PropTypes.bool,
  /** Temporary flag to indicate if input is part of DateRange */
  isDateRange: PropTypes.bool
};

BaseDateInput.defaultProps = {
  internalValidations: [new DateValidator()]
};

export { defaultDateFormat, BaseDateInput };
export default DateInput;
