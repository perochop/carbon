import { SIMPLE_COLOR_PICKER_PREVIEW, SIMPLE_COLOR_PICKER, SIMPLE_COLOR_PICKER_LEGEND } from './locators';

// component preview locators
export const simpleColorPickerPreview = () => cy.iFrame(SIMPLE_COLOR_PICKER_PREVIEW);
export const simpleColorPickerInput = index => cy.iFrame(SIMPLE_COLOR_PICKER_PREVIEW)
  .find(`li:nth-child(${index}) > div > input`);
export const simpleColorPickerDiv = index => cy.iFrame(SIMPLE_COLOR_PICKER_PREVIEW)
  .find(`li:nth-child(${index}) > div > div > span`);
export const simpleColorPicker = index => cy.iFrame(SIMPLE_COLOR_PICKER).children().eq(1)
  .find(`div:nth-child(${index}) > input`);
  // .children();
export const simpleColorPickerSpan = index => cy.iFrame(SIMPLE_COLOR_PICKER).children().eq(1)
  .find(`div:nth-child(${index}) > div`)
  .children();
export const simpleColorPickerLegend = () => cy.iFrame(SIMPLE_COLOR_PICKER_LEGEND);
