Feature: Button Toggle component - set all possible icon and verify
  I want to change Button Toggle icon

  Background: Open Button Toggle component page
    Given I open "Button Toggle" component page

@negative
  Scenario: Change Button Toggle icon to null
    When I set button icon to "null"
    Then Button icon not exists on preview

  @positive
  Scenario Outline: Change Button Toggle icon
    When I set button icon to "<iconName>"
    Then Button icon on preview is "<iconName>"
    Examples:
      | iconName          |
      | add               |
      | alert             |
      | analysis          |
      | arrow_down        |
      | arrow_left        |
      | arrow_right       |
      | arrow_up          |
      | attach            |
      | basket            |
      | bin               |
      | blocked           |
      | blocked_square    |
      | bulk_destroy      |
      | business          |
      | calendar          |
      | call              |
      | camera            |
      | card_view         |
      | caret_down        |
      | cart              |
      | chat              |
      | chart_bar         |
      | chart_line        |
      | chart_pie         |
      | chat_notes        |
      | chevron_down      |
      | chevron_left      |
      | chevron_right     |
      | chevron_up        |
      | clock             |
      | close             |
      | collaborate       |
      | copy              |
      | connect           |
      | credit_card       |
      | credit_card_slash |
      | cross             |
      | csv               |
      | delete            |
      | delivery          |
      | disputed          |
      | download          |
      | drag              |
      | drag_vertical     |
      | draft             |
      | dropdown          |
      | duplicate         |
      | edit              |
      | edited            |
      | email             |
      | error             |
      | favourite         |
      | favourite_lined   |
      | fax               |
      | feedback          |
      | filter            |
      | filter_new        |
      | fit_height        |
      | fit_width         |
      | folder            |
      | gift              |
      | graph             |
      | grid              |
      | help              |
      | home              |
      | image             |
      | in_progress       |
      | in_transit        |
      | info              |
      | individual        |
      | key               |
      | link              |
      | list_view         |
      | locked            |
      | location          |
      | logout            |
      | marker            |
      | message           |
      | messages          |
      | minus             |
      | mobile            |
      | pdf               |
      | people            |
      | person            |
      | phone             |
      | plus              |
      | print             |
      | progressed        |
      | question          |
      | refresh           |
      | remove            |
      | save              |
      | search            |
      | services          |
      | settings          |
      | share             |
      | shop              |
      | sort_down         |
      | sort_up           |
      | submitted         |
      | sync              |
      | tick              |
      | unlocked          |
      | upload            |
      | uploaded          |
      | view              |
      | warning           |
      | white-tick        |