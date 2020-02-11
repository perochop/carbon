Feature: Accordion component
  I want to change Accordion component properties

  Background: Open Accordion component page
    Given I open "Test Accordion" component page basic

  @positive
  Scenario Outline: Set Accordion iconAlign to <iconAlign>
    When I select iconAlign to "<iconAlign>"
    Then Accordion iconAlign property on preview is set to "<iconAlign>"
    Examples:
      | iconAlign |
      | left      |
      | right     |

  @positive
  Scenario Outline: Set Accordion iconType to <iconType>
    When I select iconType to "<iconType>"
    Then Accordion iconType property on preview is set to "<iconType>"
    Examples:
      | iconType     |
      | chevron_down |
      | dropdown     |

  @positive
  Scenario Outline: Set Accordion type to <type>
    When I select type to "<type>"
    Then Accordion type property on preview is set to "<type>"
    Examples:
      | type      |
      | primary   |
      | secondary |

  @positive
  Scenario: I expand accordion using click
    When I expand accordionRow via click
    Then accordionRow is expanded

  @positive
  Scenario: I expand accordion using enter key
    When I expand accordionRow using enter key
    Then accordionRow is expanded

  @positive
  Scenario: Verify color pallete for primary type Accordion
    # When I open "Accordion" component page
    Then Accordion has proper primary type color palette

  @positive
  Scenario: Verify color pallete for secondary type Accordion
    When I select type to "secondary"
    Then Accordion has proper secondary type color palette

  @positive
  Scenario: Verify color pallete for the Accordion row on focus
    When I focus accordionRow
    Then accordionRow has golden border outline

  @positive
  Scenario: Check expansion toggled event for the Accordion row on focus
    Given clear all actions in Actions Tab
    When I expand accordionRow via click
    Then "expansion toggled" accordion action was called in Actions Tab