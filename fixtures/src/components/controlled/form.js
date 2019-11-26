import React, { useState } from 'react';
import Form from 'carbon-react/lib/__experimental__/components/form';
import { Checkbox } from 'carbon-react/lib/__experimental__/components/checkbox';
import Date from 'carbon-react/lib/__experimental__/components/date';
import DateRange from 'carbon-react/lib/__experimental__/components/date-range';
import Decimal from 'carbon-react/lib/__experimental__/components/decimal';
import Switch from 'carbon-react/lib/__experimental__/components/switch';

import { LogConsumer } from '../log';

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [dateRange, setDateRange] = useState(['', '']);
  const [date, setDate] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const [decimal, setDecimal] = useState('0.0');
  const [decimalTwo, setDecimalTwo] = useState('0.99');
  const [switchOne, setSwitchOne] = useState('');
  const [switchTwo, setSwitchTwo] = useState('');

  return (
    <LogConsumer>
      {(log) => {
        const onChange = store => (e) => {
          log(e, { method: 'onChange' });
        };
        const onBlur = e => log(e, { method: 'onBlur' });
        return (
          <React.Fragment>
            <h1>Controlled Form</h1>
            <div id='controlled_checkbox'>
              <ul>
                <li>onChange handler should update the log when each form is checked</li>
                <li>onBlur handler should update the log when each form is blurred</li>
                <li>each form button has props name, id which should be reflected in both events</li>
              </ul>
              <Form
                id='controlled_form'
                onSubmit={ () => {} }
              >
                <DateRange
                  label='label date range'
                  labelInline
                  labelAlign='right'
                  id='controlled_date_range'
                  labelWidth={ 10 }
                  inputWidth={ 10 }
                  value={ dateRange }
                  onChange={ onChange(setDateRange) }
                  onBlur={ onBlur }
                  name='controlled_date_range'
                />
                <Checkbox
                  id='controlled_checkbox_one'
                  label='label checkbox one'
                  onChange={ onChange(setChecked) }
                  labelInline
                  labelAlign='left'
                  labelWidth={ 10 }
                  inputWidth={ 10 }
                  onBlur={ onBlur }
                  checked={ checked }
                  name='controlled_checkbox_one'
                />
                <Checkbox
                  label='label checkbox two'
                  id='controlled_checkbox_two'
                  onChange={ onChange(setCheckedTwo) }
                  labelInline
                  labelAlign='left'
                  labelWidth={ 10 }
                  inputWidth={ 10 }
                  onBlur={ onBlur }
                  checked={ checkedTwo }
                  name='controlled_checkbox_two'
                />
                <Decimal
                  value={ decimal }
                  label='label decimal one'
                  id='controlled_decimal_one'
                  labelInline
                  labelWidth={ 10 }
                  inputWidth={ 10 }
                  onChange={ onChange(setDecimal) }
                  onBlur={ onBlur }
                  name='controlled_decimal_one'
                />
                <Decimal
                  value={ decimalTwo }
                  label='label decimal two'
                  id='controlled_decimal_two'
                  labelInline
                  labelWidth={ 10 }
                  inputWidth={ 10 }
                  onChange={ onChange(setDecimalTwo) }
                  onBlur={ onBlur }
                  name='controlled_decimal_two'
                />
                <Date
                  onChange={ onChange }
                  onBlur={ onBlur }
                  id='controlled_date_id'
                  name='controlled_date_name'
                  label='Controlled Date'
                  defaultValue={ date }
                />


              </Form>
            </div>
          </React.Fragment>
        );
      }}
    </LogConsumer>
  );
};

export default ControlledCheckbox;
