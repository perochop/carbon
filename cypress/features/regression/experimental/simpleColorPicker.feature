Feature: Experimental Simple Color Picker component
  I want to change Simple Color Picker component properties

  Background: Open Experimental Simple Color Picker component page
    Given I open "Experimental Simple Color Picker" component page

  @positiv
  Scenario Outline: Change Simple Color Picker name to <name>
    When I set name to "<name>"
    Then Simple Color Picker name on preview is set to "<name>"
    Examples:
      | name                    |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # @ignore because of FE-1447
  # | <>                       |

  @positiv
  Scenario Outline: Change Simple Color Picker legend to <legend>
    When I set legend to "<legend>"
    Then Simple Color Picker legend on preview is set to "<legend>"
    Examples:
      | legend                  |
      | Sample text             |
      | 1234567890              |
      | áéíóú¿¡üñ               |
      | !@#$%^*()_+-=~[];:.,?{} |
      | ÄÖÜßäöüß                |
  # @ignore because of FE-1447
  # | <>                       |

  @positive
  Scenario Outline: Check the Simple Color Picker <position> element was selected
    Given clear all actions in Actions Tab
    When I click <position> color
    Then Experimenta Simple Color Picker <position> element was picked up
      And Selected "<color>" action was called in Actions Tab
    Examples:
      | position | color   |
      | 1        | #00A376 |
      | 2        | #0073C1 |
      | 3        | #582C83 |
      | 4        | #E96400 |
      | 5        | #99ADB6 |
      | 6        | #C7384F |
      | 7        | #004500 |
      | 8        | #FFB500 |
      | 9        | #335C6D |
      | 10       | #00DC00 |