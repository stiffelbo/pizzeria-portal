# Dashboard
- `/`
    - statystyki zamówień (zdalne i lokalne)
    - lista rezerwacji, eventów
# Logowanie
- `/login`
    - form login pass submit (link do dash)
# Stoliki
- `/tables`
    - wybór data godzina
    - tabela z listą rezrwacji i wydarzeń 
        - col -> stolik
        - row -> 0.5 h
        - jak tydzień w google callendar
        - po kliknieciu przechodzimy do bookingu lub eventu
- `/tables/booking/:id`   -> id rezerwacji
    - info o rezerwacji,
    - form edycji
- `/tables/booking/new`
    - form nowej rezerwacji   
- `/tables/events/:id`   -> id eventu
    - info o evencie,
    - form edycji
- `/tables/events/new`
    - form nowego eventu    

# Kelner
- `/waiter`
    - tabela 
        row -> stoliki
        col -> info (status, czas od ostatniej aktywnośći, dostępne akcje)
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje produktu
    - zamowienie (zamówione produkty z opcjami)
    - podsumowanie zamówienia
- `/waiter/order/:id`  -> id zamówienia
    - jak wyżej

# Kuchnia
- `/kitchen`
    - lista zamówień w kolejności złozenia
    - nr stolika lub zamowienia zdalnego, 
    - info o daniach z zamówienia
    - togle statusu zamówienia