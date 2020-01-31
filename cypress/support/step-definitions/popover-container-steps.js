import { icon, closeIconButton } from '../../locators';
import {
  popoverContainerDataComponent,
  popoverContainerContent,
  popoverContainerTitle,
  popoverContainerContentFirstInnerElement,
  popoverContainerContentSecondInnerElement,
  popoverContainerContentThirdInnerElement,
  popoverSettingsIcon,
} from '../../locators/popover-container';

const FIRST_ELEMENT = 1;
const SECOND_ELEMENT = 2;

When('I click onto icon', () => {
  icon().click();
});

Then('Popover container is visible', () => {
  popoverContainerDataComponent().should('exist');
  popoverContainerDataComponent().children().should('have.attr', 'data-element', 'settings');
  popoverContainerContent().should('be.visible');
  popoverContainerContent().children().should('have.length', 3);
  popoverContainerContent().should('have.css', 'background', 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box')
    .and('have.css', 'box-shadow', 'rgba(0, 20, 29, 0.2) 0px 5px 5px 0px, rgba(0, 20, 29, 0.1) 0px 10px 10px 0px')
    .and('have.css', 'padding', '16px 24px')
    .and('have.css', 'min-width', '300px')
    .and('have.css', 'position', 'absolute')
    .and('have.css', 'top', '0px')
    .and('have.css', 'opacity', '1')
    .and('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)')
    .and('have.css', 'transition', 'all 0.3s cubic-bezier(0.25, 0.25, 0, 1.5) 0s');
  popoverContainerContentFirstInnerElement(FIRST_ELEMENT).should('have.attr', 'data-element', 'popover-container-title').and('be.visible');
  popoverContainerContentFirstInnerElement(SECOND_ELEMENT).should('have.attr', 'data-element', 'close').and('be.visible');
  popoverContainerContentSecondInnerElement().should('exist').and('be.visible');
  popoverContainerContentThirdInnerElement().should('have.attr', 'data-component', 'button').and('be.visible');
});

Then('Popover title on preview is set to {string}', (title) => {
  popoverContainerTitle().should('have.text', title);
});

Then('Popover component opened the {string} side', (side) => {
  if (side === 'left') {
    popoverContainerDataComponent().parent().should('have.attr', 'style').should('contain', 'margin-left', '400px');
    popoverContainerContent().should('have.css', 'right', '0px');
  } else {
    popoverContainerDataComponent().parent().should('have.attr', 'style').should('not.contain', 'margin-left', '400px');
    popoverContainerContent().should('have.css', 'left', '0px');
  }
});

Then('Popover container is not visible', () => {
  popoverContainerContent().should('not.exist');
});

When('I click onto popover setting icon using {string} key', (key) => {
  switch (key) {
    case 'Enter':
      popoverSettingsIcon().trigger('keydown', { keyCode: 13, which: 13 });
      break;
    case 'Space':
      popoverSettingsIcon().trigger('keydown', { keyCode: 32, which: 32 });
      break;
    default: throw new Error('Use Space or Enter key');
  }
});

Then('I press onto closeIcon using {string} key', (key) => {
  switch (key) {
    case 'Enter':
      closeIconButton().trigger('keydown', { keyCode: 13, which: 13 });
      break;
    case 'Space':
      closeIconButton().trigger('keydown', { keyCode: 32, which: 32 });
      break;
    default: throw new Error('Use Space or Enter key');
  }
});
