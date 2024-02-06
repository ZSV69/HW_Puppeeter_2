Feature: Service for Movie tickets order
    
        Scenario: Zveropolis pozitive
        Given User is on page1 "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day1
        Then The user selects the desired movie1
        Then The user chooses a location1
        Then The user is booking tickets1
        Then The user confirms the booking1 "Получить код бронирования"
    
        Scenario: Mickey Mouse positive
        Given User is on page2 "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day2
        Then The user selects the desired movie2
        Then The user chooses a location2
        Then The user is booking tickets2
        Then The user confirms the booking2 "Получить код бронирования"
    
        Scenario: Mickey Mouse negative
        Given User is on page3 "http://qamid.tmweb.ru/client/index.php"
        When The user selects the desired day3
        Then The user selects the desired movie3
        Then The user selects the occupied place
        Then The user has booked tickets
        Then The user has confirmed the booking of tickets
        Then Get Error "Выбранно Вами место уже занято"
        