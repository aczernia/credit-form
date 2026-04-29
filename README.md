# Opis
W tym zadaniu należy przygotować prosty fragment formularza kredytowego. 
Formularz jest dostępny pod ścieżką /form. Powinien zbierać podstawowe dane z zachowaniem walidacji, następnie wysyłać je do API.

# Pola i ich walidacje
1. Imię - pole tekstowe. 
Walidacje:
    * a) Wymagalność - _Pole jest wymagane_
    * b) Minimum 3 znaki - _Wartość jest za krótka_
    * c) Maksymalnie 50 znaków - _Wartość jest za długa_
    * d) Powinno kończyć się na a, jeżeli płeć ustawiona jest na "Kobieta" - _Niepoprawna wartość_

2. Nazwisko - pole tekstowe. 
Walidacje:
    * a) Wymagalność - _Pole jest wymagane_
    * b) Minimum 3 znaki - _Wartość jest za krótka_
    * c) Maksymalnie 50 znaków - _Wartość jest za długa_

3. Pesel - pole tekstowe
Walidacje:
    * a) Wymagalność - _Pole jest wymagane_
    * b) Dokładnie 11 znaków - _Niepoprawna wartość_
    * c) Unikalność - _Pesel jest już w systemie_

4. Płeć - pole wyboru
Walidacje
    * a) Wymagalność - _Pole jest wymagane_

5. Data urodzenia - pole daty
Walidacje
    * a) Wymagalność _Pole jest wymagane_
    * b) Data w zakresie od 1901 - 2026 _Niepoprawna data_

# Zachowanie
Przy kliknięciu Zapisz powinien budować się model FormRequest, jeżeli formularz jest poprawny, w przeciwnym razie powinniśmy widzieć wyżej wymienione błędy. 