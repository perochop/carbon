import { searchComponent, searchInput, searchInnerElements } from '../../locators/search';

const FIRST_ELEMENT = 1;
const SECOND_ELEMENT = 2;
const THIRD_ELEMENT = 3;

Then('Search component placeholder is set to {string}', (placeholder) => {
  searchInput().should('have.attr', 'placeholder', placeholder);
});

When('Type {string} text into search input', (text) => {
  searchInput().clear().type(text);
});

Then('Search component has {string} as input, icon and button', (iconType) => {
  searchInnerElements(FIRST_ELEMENT).should('have.attr', 'data-element', 'input').and('be.visible');
  searchInnerElements(SECOND_ELEMENT).should('have.attr', 'data-component', 'icon').and('be.visible');
  searchInnerElements(SECOND_ELEMENT).should('have.attr', 'data-element', iconType).and('be.visible');
  searchInnerElements(THIRD_ELEMENT).children().should('have.attr', 'data-component', 'button').and('be.visible');
  searchInnerElements(THIRD_ELEMENT).children().should('have.attr', 'data-element', 'button').and('be.visible');
  searchInnerElements(THIRD_ELEMENT).children().should('have.attr', 'type', 'button').and('be.visible');
});

Then('Search component input has {string} color', (color) => {
  searchComponent().should('have.css', 'border-bottom-color', color);
});

When('Search component is focused', () => {
  searchInput().focus();
});
