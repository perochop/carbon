import {
  switchPreview, switchProperties, switchInputDeprecated, switchDataComponentByPosition,
  switchInput, switchDataComponentElement, loaderDataComponent, switchDataComponent,
  switchFieldHelp,
} from '../../locators/switch';
import { label, getKnobsInput } from '../../locators';
import { DEBUG_FLAG } from '..';

const COMMON_INPUT = 'common-input';
const FIRST_SWITCH = '0';
const SECOND_SWITCH = '1';
const THIRD_SWITCH = '2';

Then('Switch deprecated component is set to fieldHelpInline', () => {
  switchProperties().should('have.class', 'carbon-checkbox__help-text--inline');
});

Then('Switch deprecated component is not set to fieldHelpInline', () => {
  switchProperties().should('not.have.class', 'carbon-checkbox__help-text--inline');
});

Then('Switch component is set to fieldHelpInline', () => {
  switchFieldHelp().should('have.css', 'margin-bottom', '10px');
});

Then('Switch component is not set to fieldHelpInline', () => {
  switchFieldHelp().should('not.have.css', 'margin-bottom', '10px');
});

Then('Switch deprecated component is set to labelInline', () => {
  label().should('have.class', `${COMMON_INPUT}__label--inline`);
});

Then('Switch component is set to labelInline', () => {
  label().should('have.css', 'box-sizing', 'border-box')
    .and('have.css', 'padding-top', '4px');
});

Then('Switch deprecated component is not set to labelInline', () => {
  label().should('not.have.class', `${COMMON_INPUT}__label--inline`);
});

Then('Switch component is not set to labelInline', () => {
  label().should('.not.have.css', 'box-sizing', 'border-box')
    .and('have.css', 'padding-top', '4px');
});

Then('Switch deprecated component is reversed', () => {
  switchPreview().should('have.class', 'carbon-switch__reverse');
});

Then('Switch deprecated component is not reversed', () => {
  switchPreview().should('not.have.class', 'carbon-switch__reverse');
});

Then('Switch component is not reversed', () => {
  cy.wait(200, { log: DEBUG_FLAG }); // needed to be here due to animation
  switchDataComponentElement(0).children()
    .should('have.attr', 'name', 'switch');
});

Then('Switch component is reversed', () => {
  cy.wait(200, { log: DEBUG_FLAG }); // needed to be here due to animation
  switchDataComponentElement(0).should('have.attr', 'data-element', 'label');
});

Then('Switch deprecated component is loading', () => {
  switchPreview().should('have.class', `${COMMON_INPUT}--readonly`)
    .and('have.class', `${COMMON_INPUT}--disabled`);
  switchInputDeprecated().should('have.attr', 'disabled');
  switchInputDeprecated().should('have.attr', 'readonly');
});

Then('Switch deprecated component is not loading', () => {
  switchPreview().should('not.have.class', `${COMMON_INPUT}--readonly`)
    .and('not.have.class', `${COMMON_INPUT}--disabled`);
  switchInputDeprecated().should('not.have.attr', 'disabled');
  switchInputDeprecated().should('not.have.attr', 'readonly');
});

Then('Switch component is loading', () => {
  loaderDataComponent().should('have.attr', 'data-component', 'loader');
  label().should('have.css', 'color', 'rgba(0, 0, 0, 0.55)');
});

Then('Switch component is not loading', () => {
  loaderDataComponent().should('not.have.attr', 'data-component', 'loader');
  label().should('have.css', 'color', 'rgba(0, 0, 0, 0.9)');
});

Then('I toggle {string} switch {int} times', (position, times) => {
  for (let i = 0; i < times; i++) {
    switch (position) {
      case 'first':
        switchDataComponentByPosition(FIRST_SWITCH, times).click();
        break;
      case 'second':
        switchDataComponentByPosition(SECOND_SWITCH, times).click();
        break;
      case 'third':
        switchDataComponentByPosition(THIRD_SWITCH, times).click();
        break;
      default: throw new Error('There are only three switch elements on the page');
    }
  }
});

Then('value is set to {string}', (text) => {
  switchInput().should('have.attr', 'value', text);
});

Then('Switch is disabled', () => {
  switchDataComponent().should('have.attr', 'disabled');
  label().should('have.css', 'color', 'rgba(0, 0, 0, 0.55)');
});

Then('Switch is enabled', () => {
  switchDataComponent().should('not.have.attr', 'disabled');
  label().should('have.css', 'color', 'rgba(0, 0, 0, 0.9)');
});

Then('Experimental Switch size value is set to {string}', (size) => {
  if (size === 'small') {
    switchInput().should('have.css', 'height', '24px')
      .and('have.css', 'width', '60px');
  } else {
    switchInput().should('have.css', 'height', '40px')
      .and('have.css', 'width', '78px');
  }
});
