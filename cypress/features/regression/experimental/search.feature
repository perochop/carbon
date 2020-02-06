Feature: Search component
  I want to change Search component properties

  Background: Open Search component page
    Given I open "Experimental Search" component page

  @positive
  Scenario Outline: Set placeholder to <placeholder>
    When I set placeholder to "<placeholder>"
    Then Search component placeholder is set to "<placeholder>"
    Examples:
      | placeholder             |
      | Sample text             |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
      | <>                      |

  @positive
  Scenario: Verify inner elements in Search component
    # When I open "Experimental Search" component page
    Then Search component has input and "search" as icon
      And Search component input has "rgb(204, 214, 218)" color

  @positive
  Scenario: Verify inner elements in Search component after change icon
    When Type "Search" text into search input
    Then Search component has input, "cross" as icon and button
      And Search component input has "rgb(37, 91, 199)" color

  @positive
  Scenario: Check the change function call for Search component
    Given clear all actions in Actions Tab
    When Type "Search" text into search input
    Then change action was called in Actions Tab

  @positive
  Scenario: Check the blur function call for Search component
    Given clear all actions in Actions Tab
    When Search component is focused
      And I click outside of the component
    Then blur action was called in Actions Tab