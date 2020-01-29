import {
  simpleColorPickerInput, simpleColorPickerDiv, simpleColorPicker, simpleColorPickerSpan, simpleColorPickerLegend,
} from '../../locators/simple-color-picker';
import { eventInAction } from '../../locators';
import { clickActionsTab, clickClear } from '../helper';

const FIRST_ELEMENT = 1;
const SECOND_ELEMENT = 2;
const THIRD_ELEMENT = 3;
const FOURTH_ELEMENT = 4;
const FIFTH_ELEMENT = 5;
const SIXTH_ELEMENT = 6;
const SEVENTH_ELEMENT = 7;
const EIGHTH_ELEMENT = 8;
const NINTH_ELEMENT = 9;
const TENTH_ELEMENT = 10;

Then('Simple Color Picker deprecated name on preview is set to {string}', (value) => {
  simpleColorPickerInput(FIRST_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPickerInput(SECOND_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPickerInput(THIRD_ELEMENT)
    .should('have.attr', 'name', `${value}`);
});

Then('Simple Color Picker name on preview is set to {string}', (value) => {
  simpleColorPicker(FIRST_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(SECOND_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(THIRD_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(FOURTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(FIFTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(SIXTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(SEVENTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(EIGHTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(NINTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
  simpleColorPicker(TENTH_ELEMENT)
    .should('have.attr', 'name', `${value}`);
});

Then('Simple Color Picker legend on preview is set to {string}', (value) => {
  simpleColorPickerLegend().should('have.text', `${value}`);
});

Then('Simple Color Picker availableColors on preview is set to {string} with rgb {string} parameter', (color, rgb) => {
  const colorArray = color.split(',');
  const rgbArray = rgb.split(';');

  colorArray.forEach((entry) => {
    simpleColorPickerInput(colorArray.indexOf(entry) + 1)
      .should('have.attr', 'value', entry);
    simpleColorPickerDiv(colorArray.indexOf(entry) + 1)
      .should('have.css', 'background-color', rgbArray[colorArray.indexOf(entry)]);
  });
});

Then('Simple Color Picker availableColors on preview is set to {string}', (value) => {
  simpleColorPicker().children()
    .should('have.length', `${value}`);
});

Then('Simple Color Picker {int} element was picked up', (index) => {
  for (let i = 1; i < index; ++i) {
    simpleColorPickerDiv(i + 1)
      .should('have.attr', 'data-element', 'tick')
      .should('have.attr', 'data-component', 'icon');
  }
});

Then('Experimenta Simple Color Picker {int} element was picked up', (index) => {
  simpleColorPickerSpan(index)
    .should('have.attr', 'data-element', 'tick')
    .should('have.attr', 'data-component', 'icon');
});

When('I pick {int} color in deprecated Simple Color Picker', (index) => {
  if (index === 1) {
    simpleColorPickerInput(SECOND_ELEMENT).click();
    simpleColorPickerInput(FIRST_ELEMENT).click();
  }
  for (let i = 0; i < index; ++i) {
    simpleColorPickerInput(i + 1).click();
  }
});

When('I click {int} color', (index) => {
  if (index === 3) {
    simpleColorPicker(1).click();
    clickActionsTab();
    clickClear();
    simpleColorPicker(index).click();
  } else {
    simpleColorPicker(index).click();
  }
});

Then('{word} {string} action was called in Actions Tab', (event, color) => {
  eventInAction(event).contains(color);
});
