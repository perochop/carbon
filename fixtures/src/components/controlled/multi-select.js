import React, { useState } from 'react';
import { Select, Option } from 'carbon-react/lib/__experimental__/components/select';
import Button from 'carbon-react/lib/components/button';
import { LogConsumer } from '../log';

const renderOptions = () => {
  return [
    <Option
      key='0' text='Amber'
      value='1'
    />,
    <Option
      key='1' text='Black'
      value='2'
    />,
    <Option
      key='2' text='Blue'
      value='3'
    />,
    <Option
      key='3' text='Brown'
      value='4'
    />,
    <Option
      key='4' text='Green'
      value='5'
    />,
    <Option
      key='5' text='Orange'
      value='6'
    />,
    <Option
      key='6' text='Pink'
      value='7'
    />,
    <Option
      key='7' text='Purple'
      value='8'
    />,
    <Option
      key='8' text='Red'
      value='9'
    />,
    <Option
      key='9' text='White'
      value='10'
    />,
    <Option
      key='10' text='Yellow'
      value='11'
    />
  ];
};

const ControlledMultiSelect = () => {
  const [selectedValue, setSelectedValue] = useState([{ value: '11', text: 'Yellow' }, { value: '10', text: 'White' }]);
  const [selectedValueExampleTwo, setSelectedValueExampleTwo] = useState(['2']);
  const [addOptions, setAddOptions] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <LogConsumer>
      {(log) => {
        const onChange = setter => (e) => {
          log(e, { method: 'onChange' });
          setter(e.target.value.map(o => o.optionValue));
        };
        const onBlur = e => log(e, { method: 'onBlur' });

        const onClick = () => {
          setAddOptions(!addOptions);
          setDisabled(true);
        };

        return (
          <React.Fragment>
            <div id='controlled_multi_select'>
              <h1>Controlled Select</h1>
              <h2>Unselected</h2>
              <ul>
                <li>onChange handler should update the log when the selection is changed</li>
                <li>onBlur handler should update the log when the selection blurred</li>
                <li>each option has props value, name, id which should be reflected in both events</li>
                <li>the onChange handler sets the selected value</li>
              </ul>
              <Button disabled={ disabled } onClick={ onClick }>Click To Add Options</Button>
              <Select
                onChange={ onChange(setSelectedValue) }
                onBlur={ onBlur }
                label='Controlled Example'
                value={ selectedValue }
                id='controlled_multi_select_id'
                name='controlled_multi_select_name'
                enableMultiSelect
              >
                { addOptions ? renderOptions() : null }
              </Select>
            </div>
            <div id='controlled_multi_select_selected'>
              <h2>Default Selected</h2>
              <ul>
                <li>option &quot;Black&quot; should be selected by default</li>
              </ul>
              <Select
                onChange={ onChange(setSelectedValueExampleTwo) }
                onBlur={ onBlur }
                label='Controlled Example Default Selected'
                value={ selectedValueExampleTwo }
                id='controlled_multi_select_selected_id'
                name='controlled_multi_select_selected_name'
                enableMultiSelect
              >
                <Option text='Amber' value='1' />
                <Option text='Black' value='2' />
                <Option text='Blue' value='3' />
                <Option text='Brown' value='4' />
                <Option text='Green' value='5' />
                <Option text='Orange' value='6' />
                <Option text='Pink' value='7' />
                <Option text='Purple' value='8' />
                <Option text='Red' value='9' />
                <Option text='White' value='10' />
                <Option text='Yellow' value='11' />
              </Select>
            </div>
          </React.Fragment>
        );
      }}
    </LogConsumer>
  );
};

export default ControlledMultiSelect;
