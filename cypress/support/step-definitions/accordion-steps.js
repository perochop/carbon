import {
  accordionTitleContainer, accordionIcon, accordion, accordionTitleContainerByPosition,
} from '../../locators/accordion';
import { eventInAction } from '../../locators';

const FIRST_ELEMENT = 0;

Then('Accordion iconAlign property on preview is set to {string}', (iconAlign) => {
  accordionTitleContainerByPosition(FIRST_ELEMENT).first()
    .should('have.attr', 'data-element', 'accordion-title')
    .and('be.visible');
  accordionTitleContainerByPosition(FIRST_ELEMENT).last()
    .should('have.attr', 'data-component', 'icon')
    .and('be.visible');
  if (iconAlign === 'right') { // set by default
    accordionTitleContainer().should('have.css', 'justify-content', 'space-between')
      .and('not.have.css', 'flex-direction', 'row-reverse');
    accordionTitleContainerByPosition(FIRST_ELEMENT).first()
      .should('have.css', 'margin-right', '0px');
  } else {
    accordionTitleContainer().should('have.css', 'flex-direction', 'row-reverse');
    accordionTitleContainerByPosition(FIRST_ELEMENT).last()
      .should('have.css', 'margin-right', '16px');
  }
});

Then('Accordion iconType property on preview is set to {string}', (iconType) => {
  accordionIcon().should('have.attr', 'data-element', iconType)
    .and('be.visible');
});

Then('Accordion type property on preview is set to {string}', (type) => {
  if (type === 'primary') {
    accordion().should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(204, 214, 218)');
  } else {
    accordion().should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('not.have.css', 'border', '1px solid rgb(204, 214, 218)');
  }
});

When('I expand accordionRow via click', () => {
  accordionTitleContainer().click();
});

When('I expand accordionRow using enter key', () => {
  accordionTitleContainer().trigger('keydown', { keyCode: 13, which: 13 });
});

Then('accordionRow is expanded', () => {
  accordionTitleContainer().should('have.attr', 'aria-expanded', 'true')
    .and('be.visible');
});

Then('Accordion has proper {word} type color {string} palette', (type, color) => {
  accordion().should('have.css', 'border-bottom-color', color)
    .and('have.css', 'border-left-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-right-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-top-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-bottom-style', 'solid')
    .and('have.css', 'border-left-style', 'solid')
    .and('have.css', 'border-right-style', 'solid')
    .and('have.css', 'border-top-style', 'solid')
    .and('have.css', 'border-bottom-width', '1px')
    .and('have.css', 'border-left-width', '1px')
    .and('have.css', 'border-right-width', '1px')
    .and('have.css', 'border-top-width', '1px');
});

Then('accordionRow has golden border outline', () => {
  accordionTitleContainer().should('have.css', 'outline', 'rgb(255, 181, 0) solid 2px')
    .and('be.visible');
});

When('I focus accordionRow', () => {
  accordionTitleContainer(FIRST_ELEMENT).focus();
});

Then('{string} accordion event was called in Actions Tab', (event) => {
  eventInAction(event);
});
