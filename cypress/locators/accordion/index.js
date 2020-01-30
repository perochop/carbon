import {
  ACCORDION_PREVIEW, ACCORDION_CONTENT, ACCORDION_TITLE_CONTAINER, ACCORDION_TITLE,
} from './locators';

// component preview locators
export const accordion = index => cy.iFrame(ACCORDION_PREVIEW).eq(index);
export const accordionTitleContainer = index => accordion(index).find(ACCORDION_TITLE_CONTAINER);
export const accordionTitle = index => accordionTitleContainer(index).find(ACCORDION_TITLE);
export const accordionContent = index => accordion(index).find(ACCORDION_CONTENT);
export const accordionIcon = index => accordionTitleContainer(index)
  .find('span');
