import {
  SWITCH_PREVIEW, SWITCH_INPUT_DEPRECATED, SWITCH_DATA_COMPONENT,
} from './locators';

// component preview locators
export const switchPreview = () => cy.iFrame(SWITCH_PREVIEW);
export const switchProperties = () => cy.iFrame(SWITCH_PREVIEW)
  .find('span');
export const switchInputDeprecated = () => cy.iFrame(SWITCH_INPUT_DEPRECATED);
export const switchInput = () => cy.iFrame(SWITCH_DATA_COMPONENT).find('input');
export const switchDataComponent = () => cy.iFrame(SWITCH_DATA_COMPONENT);
export const loaderDataComponent = () => cy.iFrame(SWITCH_DATA_COMPONENT).children().children()
  .children()
  .find('div:nth-child(2)')
  .children()
  .children()
  .find('div:nth-child(1)');
export const switchFieldHelp = () => cy.iFrame(SWITCH_DATA_COMPONENT).find('span[data-element="help"]');

// component preview locators into iFrame
export const switchDataComponentByPosition = position => cy.get(SWITCH_DATA_COMPONENT).find('input').eq(position);
export const switchDataComponentElement = index => cy.iFrame(SWITCH_DATA_COMPONENT)
  .find('div[name="switch"] > div > div').children()
  .eq(index);
