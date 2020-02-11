import {
  ACCORDION_PREVIEW, ACCORDION_CONTENT, ACCORDION_TITLE_CONTAINER, ACCORDION_TITLE,
} from './locators';

// component preview locators
export const accordion = () => cy.iFrame(ACCORDION_PREVIEW);
export const accordionTitleContainer = () => accordion().find(ACCORDION_TITLE_CONTAINER);
export const accordionTitle = () => accordionTitleContainer().find(ACCORDION_TITLE);
export const accordionContent = () => accordion().find(ACCORDION_CONTENT);
export const accordionIcon = () => accordionTitleContainer()
  .find('span');
