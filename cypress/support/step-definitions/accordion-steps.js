import {
  accordionTitleContainer, accordionIcon, accordion, accordionTitle,
} from '../../locators/accordion';
import { eventInAction } from '../../locators';

const FIRST_ELEMENT = 0;
const SECOND_ELEMENT = 1;
const THIRD_ELEMENT = 2;
const EIGHT = 8;

Then('Accordion iconAlign property on preview is set to {string}', (iconAlign) => {
  if (iconAlign === 'right') { // set by default
    accordionTitleContainer(FIRST_ELEMENT).eq(FIRST_ELEMENT).children().first()
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
    accordionTitleContainer(FIRST_ELEMENT).eq(FIRST_ELEMENT).children().last()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
    accordionTitleContainer(SECOND_ELEMENT).eq(FIRST_ELEMENT).children().first()
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
    accordionTitleContainer(SECOND_ELEMENT).eq(FIRST_ELEMENT).children().last()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
    accordionTitleContainer(THIRD_ELEMENT).eq(FIRST_ELEMENT).children().first()
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
    accordionTitleContainer(THIRD_ELEMENT).eq(FIRST_ELEMENT).children().last()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
  } else {
    accordionTitleContainer(FIRST_ELEMENT).eq(FIRST_ELEMENT).children()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
    accordionTitleContainer(FIRST_ELEMENT).eq(FIRST_ELEMENT).find('h3')
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
    accordionTitleContainer(SECOND_ELEMENT).eq(FIRST_ELEMENT).children()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
    accordionTitleContainer(SECOND_ELEMENT).eq(FIRST_ELEMENT).find('h3')
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
    accordionTitleContainer(THIRD_ELEMENT).eq(FIRST_ELEMENT).children()
      .should('have.attr', 'data-component', 'icon')
      .should('be.visible');
    accordionTitleContainer(THIRD_ELEMENT).eq(FIRST_ELEMENT).find('h3')
      .should('have.attr', 'data-element', 'accordion-title')
      .should('be.visible');
  }
});

Then('Accordion iconType property on preview is set to {string}', (iconType) => {
  accordionIcon(FIRST_ELEMENT).should('have.attr', 'data-element', iconType).should('be.visible');
  accordionIcon(SECOND_ELEMENT).should('have.attr', 'data-element', iconType).should('be.visible');
  accordionIcon(THIRD_ELEMENT).should('have.attr', 'data-element', iconType).should('be.visible');
});

Then('Accordion type property on preview is set to {string}', (type) => {
  if (type === 'primary') {
    accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    accordion(FIRST_ELEMENT).should('have.css', 'border', '1px solid rgb(204, 214, 218)');
    accordion(SECOND_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    accordion(SECOND_ELEMENT).should('have.css', 'border', '1px solid rgb(204, 214, 218)');
    accordion(THIRD_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)');
    accordion(THIRD_ELEMENT).should('have.css', 'border', '1px solid rgb(204, 214, 218)');
  } else {
    accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    accordion(FIRST_ELEMENT).should('not.have.css', 'border', '1px solid rgb(204, 214, 218)');
    accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    accordion(FIRST_ELEMENT).should('not.have.css', 'border', '1px solid rgb(204, 214, 218)');
    accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    accordion(FIRST_ELEMENT).should('not.have.css', 'border', '1px solid rgb(204, 214, 218)');
  }
});

Then('Accordion accordionPadding property on preview is set to {int}', (accordionPadding) => {
  const padding = accordionPadding * EIGHT;
  accordion(FIRST_ELEMENT).should('have.css', 'padding', `${padding}px`);
  accordion(SECOND_ELEMENT).should('have.css', 'padding', `${padding}px`);
  accordion(THIRD_ELEMENT).should('have.css', 'padding', `${padding}px`);
});

Then('Accordion headerPadding property on preview is set to {int}', (headerPadding) => {
  const padding = headerPadding * EIGHT;
  accordionTitleContainer(FIRST_ELEMENT).should('have.css', 'padding-bottom', `${padding}px`)
    .and('have.css', 'padding-left', `${padding}px`)
    .and('have.css', 'padding-right', `${padding}px`)
    .and('have.css', 'padding-top', `${padding}px`);
  accordionTitleContainer(SECOND_ELEMENT).should('have.css', 'padding-bottom', `${padding}px`)
    .and('have.css', 'padding-left', `${padding}px`)
    .and('have.css', 'padding-right', `${padding}px`)
    .and('have.css', 'padding-top', `${padding}px`);
  accordionTitleContainer(THIRD_ELEMENT).should('have.css', 'padding-bottom', `${padding}px`)
    .and('have.css', 'padding-left', `${padding}px`)
    .and('have.css', 'padding-right', `${padding}px`)
    .and('have.css', 'padding-top', `${padding}px`);
});

Then('Accordion headerPadding property on preview is set to {string}', (headerPadding) => {
  accordionTitle(FIRST_ELEMENT).should('have.css', 'font-size', `${headerPadding}px`);
  accordionTitle(SECOND_ELEMENT).should('have.css', 'font-size', `${headerPadding}px`);
  accordionTitle(THIRD_ELEMENT).should('have.css', 'font-size', `${headerPadding}px`);
});

When('I expand {string} accordionRow via click', (accordionRow) => {
  switch (accordionRow) {
    case 'first':
      accordionTitleContainer(FIRST_ELEMENT).click();
      break;
    case 'second':
      accordionTitleContainer(SECOND_ELEMENT).click();
      break;
    case 'third':
      accordionTitleContainer(THIRD_ELEMENT).click();
      break;
    default: throw new Error('There are only three accordions on the page');
  }
});

When('I expand {string} accordionRow using enter key', (accordionRow) => {
  switch (accordionRow) {
    case 'first':
      accordionTitleContainer(FIRST_ELEMENT).trigger('keydown', { keyCode: 13, which: 13 });
      break;
    case 'second':
      accordionTitleContainer(SECOND_ELEMENT).trigger('keydown', { keyCode: 13, which: 13 });
      break;
    case 'third':
      accordionTitleContainer(THIRD_ELEMENT).trigger('keydown', { keyCode: 13, which: 13 });
      break;
    default: throw new Error('There are only three accordions on the page');
  }
});

Then('{string} accordionRow is expanded', (accordionRow) => {
  switch (accordionRow) {
    case 'first':
      accordionTitleContainer(FIRST_ELEMENT).should('have.attr', 'aria-expanded', 'true').and('be.visible');
      break;
    case 'second':
      accordionTitleContainer(SECOND_ELEMENT).should('have.attr', 'aria-expanded', 'true').and('be.visible');
      break;
    case 'third':
      accordionTitleContainer(THIRD_ELEMENT).should('have.attr', 'aria-expanded', 'true').and('be.visible');
      break;
    default: throw new Error('There are only three accordions on the page');
  }
});

Then('Accordion has proper primary type color palette', () => {
  accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
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
  accordion(SECOND_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
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
  accordion(THIRD_ELEMENT).should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
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

Then('Accordion has proper secondary type color palette', () => {
  accordion(FIRST_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    .and('not.have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-left-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-right-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-top-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-bottom-style', 'solid')
    .and('not.have.css', 'border-left-style', 'solid')
    .and('not.have.css', 'border-right-style', 'solid')
    .and('not.have.css', 'border-top-style', 'solid')
    .and('not.have.css', 'border-bottom-width', '1px')
    .and('not.have.css', 'border-left-width', '1px')
    .and('not.have.css', 'border-right-width', '1px')
    .and('not.have.css', 'border-top-width', '1px');
  accordion(SECOND_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    .and('have.css', 'margin-top', '-1px')
    .and('have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-left-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-right-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-top-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-bottom-style', 'solid')
    .and('not.have.css', 'border-left-style', 'solid')
    .and('not.have.css', 'border-right-style', 'solid')
    .and('have.css', 'border-top-style', 'solid')
    .and('have.css', 'border-bottom-width', '1px')
    .and('not.have.css', 'border-left-width', '1px')
    .and('not.have.css', 'border-right-width', '1px')
    .and('have.css', 'border-top-width', '1px');
  accordion(THIRD_ELEMENT).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    .and('have.css', 'margin-top', '-1px')
    .and('have.css', 'border-bottom-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-left-color', 'rgb(204, 214, 218)')
    .and('not.have.css', 'border-right-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-top-color', 'rgb(204, 214, 218)')
    .and('have.css', 'border-bottom-style', 'solid')
    .and('not.have.css', 'border-left-style', 'solid')
    .and('not.have.css', 'border-right-style', 'solid')
    .and('have.css', 'border-top-style', 'solid')
    .and('have.css', 'border-bottom-width', '1px')
    .and('not.have.css', 'border-left-width', '1px')
    .and('not.have.css', 'border-right-width', '1px')
    .and('have.css', 'border-top-width', '1px');
});

Then('{string} accordionRow has golden border outline', (accordionRow) => {
  switch (accordionRow) {
    case 'first':
      accordionTitleContainer(FIRST_ELEMENT).should('have.css', 'outline', 'rgb(255, 181, 0) solid 2px').and('be.visible');
      break;
    case 'second':
      accordionTitleContainer(SECOND_ELEMENT).should('have.css', 'outline', 'rgb(255, 181, 0) solid 2px').and('be.visible');
      break;
    case 'third':
      accordionTitleContainer(THIRD_ELEMENT).should('have.css', 'outline', 'rgb(255, 181, 0) solid 2px').and('be.visible');
      break;
    default: throw new Error('There are only three accordions on the page');
  }
});

When('I focus {string} accordionRow', (accordionRow) => {
  switch (accordionRow) {
    case 'first':
      accordionTitleContainer(FIRST_ELEMENT).focus();
      break;
    case 'second':
      accordionTitleContainer(SECOND_ELEMENT).focus();
      break;
    case 'third':
      accordionTitleContainer(THIRD_ELEMENT).focus();
      break;
    default: throw new Error('There are only three accordions on the page');
  }
});

Then('{string} accordion action was called in Actions Tab', (event) => {
  eventInAction(event);
});
