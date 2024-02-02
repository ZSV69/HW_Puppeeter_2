Feature: Service for Movie tickets order
    
    Feature:
        Scenario: Zveropolis pozitive
        Given User is on the page "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        And The user selects the desired movie
        And The user chooses a location
        And The user is booking tickets
        Then The user confirms the booking "Получить код бронирования"
    
    Feature Description:
        Scenario: Mickey Mouse positive
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day
        And The user selects the desired movie
        And The user chooses a location
        And The user is booking tickets
        Then The user confirms the booking "Получить код бронирования"
    
    Feature Description:
        Scenario: Mickey Mouse negative
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        And The user selects the desired day
        And The user selects the desired movie
        And The user selects the occupied place
        And The user has booked tickets
        And The user has confirmed the booking of tickets
        Then Get Error "Выбранно Вами место уже занято"
        