Feature: Accordion component
  I want to change Accordion component properties

  Background: Open Accordion component page
    Given I open "Accordion" component page

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
  Scenario Outline: Change Accordion component accordionPadding to <accordionPadding>
    When I set accordionPadding to "<accordionPadding>"
    Then Accordion accordionPadding property on preview is set to <accordionPadding>
    Examples:
      | accordionPadding |
      | 1                |
      | 10               |
      | 51               |
      | 99               |

  @positive
  Scenario Outline: Change Accordion component headerPadding to <headerPadding>
    When I set headerPadding to "<headerPadding>"
    Then Accordion headerPadding property on preview is set to <headerPadding>
    Examples:
      | headerPadding |
      | 1             |
      | 10            |
      | 51            |
      | 99            |

  @positive
  Scenario Outline: Set Accordion headingSize to <headingSize> px
    When I select headingSize to "<headingSize>"
    Then Accordion headerPadding property on preview is set to "<headingSize>"
    Examples:
      | headingSize |
      | 14          |
      | 20          |
      | 24          |
      | 32          |

  @positive
  Scenario Outline: I expand <accordionRow> accordion using click
    When I expand "<accordionRow>" accordionRow via click
    Then "<accordionRow>" accordionRow is expanded
    Examples:
      | accordionRow |
      | first        |
      | second       |
      | third        |

  @positive
  Scenario Outline: I expand <accordionRow> accordion using enter key
    When I expand "<accordionRow>" accordionRow using enter key
    Then "<accordionRow>" accordionRow is expanded
    Examples:
      | accordionRow |
      | first        |
      | second       |
      | third        |

  @positive
  Scenario: Verify color pallete for primary type Accordion
    # When I open "Accordion" component page
    Then Accordion has proper primary type color palette

  @positive
  Scenario: Verify color pallete for secondary type Accordion
    When I select type to "secondary"
    Then Accordion has proper secondary type color palette

  @positive
  Scenario Outline: Verify color pallete for the <accordionRow> Accordion row on focus
    When I focus "<accordionRow>" accordionRow
    Then "<accordionRow>" accordionRow has golden border outline
    Examples:
      | accordionRow |
      | first        |
      | second       |
      | third        |

  @positive
  Scenario Outline: expand event for the <accordionRow> Accordion row on focus
    Given clear all actions in Actions Tab
    When I expand "<accordionRow>" accordionRow via click
    Then "expansion toggled" accordion action was called in Actions Tab
    Examples:
      | accordionRow |
      | first        |
      | second       |
      | third        |