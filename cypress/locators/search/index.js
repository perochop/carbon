import { SEARCH_COMPONENT } from './locators';

// component preview locators
export const searchComponent = () => cy.iFrame(SEARCH_COMPONENT);
export const searchInput = () => searchComponent().find('input');
export const searchInnerElements = index => searchComponent().find(`:nth-child(${index})`);
