Feature: Search component
  I want to change Search component properties

  Background: Open Search component page
    Given I open "Search" component page

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
  Scenario Outline: Set inner text to <text> and threshold to <threshold>
    Given I set threshold to "<threshold>"
      And Type "<text>" text into search input
    When I click onto search icon
    Then search icon has golden border
    Examples:
      | text | threshold |
      | t    | 1         |
      | te   | 2         |
      | test | 4         |

  @positive
  Scenario: searchButton property is enabled
    When Type "S" text into search input
    Then search icon as button is visible

  @positive
  Scenario: searchButton property is disabled
    Given I uncheck searchButton checkbox
    When Type "S" text into search input
    Then search icon as button is not visible

  @positive
  Scenario: Verify inner elements in Search component
    # commented because of BDD default scenario Given - When - Then
    # When I open "Experimental Search" component page
    Then Search component has input and "search" as icon

  @positive
  Scenario: Verify inner elements in Search component after change icon
    When Type "Search" text into search input
    Then Search component has input and "cross" as icon
      And Search component input has golden border

  @positive
  Scenario: Verify golden outline for cross icon
    Given Type "Sea" text into search input
    When I click onto search icon
    Then search icon has golden border

  @positive
  Scenario: Check the change function call for Search component
    Given clear all actions in Actions Tab
    When Type "Search" text into search input
    Then change action was called in Actions Tab

  @positive
  Scenario: Check the blur function call for Search component
    Given clear all actions in Actions Tab
      And I click inside input
    When I click outside of the component
    Then blur action was called in Actions Tab