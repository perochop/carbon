import {
  POPOVER_CONTAINER_DATA_COMPONENT,
  POPOVER_CONTAINER_CONTENT,
  POPOVER_CONTAINER_TITLE,
  POPOVER_SETTINGS_ICON,
} from './locators';

// component preview locators
export const popoverContainerDataComponent = () => cy.iFrame(POPOVER_CONTAINER_DATA_COMPONENT);
export const popoverContainerContent = () => cy.iFrame(POPOVER_CONTAINER_CONTENT);
export const popoverContainerTitle = () => cy.iFrame(POPOVER_CONTAINER_TITLE);
export const popoverContainerContentFirstInnerElement = index => cy.iFrame(POPOVER_CONTAINER_CONTENT)
  .find('div')
  .find(`:nth-child(${index})`);
export const popoverContainerContentSecondInnerElement = () => cy.iFrame(POPOVER_CONTAINER_CONTENT)
  .find('p');
export const popoverContainerContentThirdInnerElement = () => cy.iFrame(POPOVER_CONTAINER_CONTENT)
  .find('button');
export const popoverSettingsIcon = () => cy.iFrame(POPOVER_SETTINGS_ICON);
