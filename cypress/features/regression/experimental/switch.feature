Feature: Experimanetal Switch component
  I want to change Switch component properties

  Background: Open Experimental Switch component page
    Given I open "Experimental Switch" component page

  @positive
  Scenario Outline: Set fieldHelp to <filedHelp>
    When I set fieldHelp to "<fieldHelp>"
    Then fieldHelp is set to "<fieldHelp>"
    Examples:
      | fieldHelp               |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # @ignore because of FE-1447
  # | <>                  |

  @positive
  Scenario: Enable fieldHelpInline
    When I check fieldHelpInline checkbox
    Then Switch component is set to fieldHelpInline

  @positive
  Scenario: Enable and disbale fieldHelpInline
    Given I check fieldHelpInline checkbox
    When I uncheck fieldHelpInline checkbox
    Then Switch component is not set to fieldHelpInline

  @positive
  Scenario Outline: Set label to <label>
    When I set label to "<label>"
    Then label is set to "<label>"
    Examples:
      | label                   |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # @ignore because of FE-1447
  # | <>                    |

  @positive
  Scenario Outline: Set labelHelp to <labelHelp>
    When I set labelHelp to "<labelHelp>"
      And I hover mouse onto help icon
    Then tooltipPreview on preview is set to "<labelHelp>"
    Examples:
      | labelHelp               |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # @ignore because of FE-1447
  # | <>                     |

  @positive
  Scenario: Enable labelInline property
    When I check labelInline checkbox
    Then Switch component is set to labelInline

  @positive
  Scenario: Enabel and disbale labelInline property
    When I check labelInline checkbox
      And I uncheck labelInline checkbox
    Then Switch component is not set to labelInline

  @positive
  Scenario: Enable loading property
    When I check loading checkbox
    Then Switch component is loading

  @positive
  Scenario: Disable loading property
    When I check loading checkbox
      And I uncheck loading checkbox
    Then Switch component is not loading

  @positive
  Scenario Outline: Change Switch component label align to <labelAlign>
    Given I set label to "label"
      And I set labelHelp to "label"
    When I select labelAlign to "<labelAlign>"
    Then label align on preview is set to "<labelAlign>"
    Examples:
      | labelAlign |
      | left       |
      | right      |

  @positive
  Scenario: Disable reverse property
    When I uncheck reverse checkbox
    Then Switch component is not reversed

  @positive
  Scenario: Enable reverse property
    When I uncheck reverse checkbox
      And I check reverse checkbox
    Then Switch component is reversed

  @positive
  Scenario Outline: Change Switch value
    When I set value to "<value>"
    Then value is set to "<value>"
    Examples:
      | value                   |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # # @ignore because of FE-1447
  # # | <>                     |

  @positive
  Scenario: Disable Switch
    When I disable Switch component
    Then Switch is disabled

  @positive
  Scenario: Disable and enable Switch
    Given I disable Switch component
    When I enable Switch component
    Then Switch is enabled

  @positive
  Scenario Outline: Change Switch size to <size>
    When I select size to "<size>"
    Then Experimental Switch size value is set to "<size>"
    Examples:
      | size  |
      | small |
      | large |