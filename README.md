# Coders Camp 2021 | Projekt Zespołowy | JavaScript

## Zespół projektowy

Zespół pracował w ramach kursu CodersCamp. Aplikację wykonali uczestnicy kursu przy pomocy mentora. Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

Mentor: Mateusz Ossoliński

Uczestnicy:

- Agnieszka Urbanowicz - Tech Lead
- Justyna Dąbrowska - Development Manager
- Magdalena Piotrowska - Product Owner
- Magdalena Kostrzewa
- Hanna Kozak
- Krzysztof Kos

## Star Wars Quiz

[Mockupy i prototyp](https://www.figma.com/file/4HOOjnEYjb7W7xEh2Vb4lx/CodersCamp2020.Project.JavaScript.StarWarsQuiz?node-id=256%3A107)

### Cel projektu

Celem projektu było dostarczenie aplikacji pozwalającej sprawdzić swoją wiedzę o postaciach,
pojazdach oraz statkach kosmicznych występujących w Gwiezdnych Wojnach.
Dodatkowo gracz rywalizował z komputerem w trakcie grania w quiz.

Aplikacja została wykonana wg dostarczonych przez organizatorów CodersCamp wymagań.

### Działanie aplikacji

#### Menu Główne

W menu głównym należy wybrać tryb gry (domyślnie jest to People):

- People — rozpoznawanie jaka postać z uniwersum Star Wars została wyświetlona
- Vehicles — rozpoznawanie jaki pojazd z uniwersum Star Wars został wyświetlony
- Starships — rozpoznawanie jaki statek kosmiczny z uniwersum Star Wars został wyświetlony

#### Rozgrywka — Quiz

Rozgrywka polega na odpowiadaniu na rozpoznawaniu co lub kto wyświetla się na obrazie po lewej stronie.
Do wyboru są 4 opcje, z czego zawsze tylko jedna jest prawidłowa.
W tym samym czasie obraz rozpoznaje także komputer, który rywalizuje z graczem (wyniki komputera nie zapisują się w rankingu).
Wynik gracza z jednej gry to ilość dobrych odpowiedzi.

Czas pozostały do końca rozgrywki odlicza miecz świetlny na dole ekranu.

#### Zasady gry

Po wyborze trybu aplikacji pokazuje zasady gry dla tego trybu.

### Sala Chwały / Ranking

Po przejściu do Hall of Fame pokazywane są 3 najlepsze wyniki graczy, grających na danym komputerze.
Wyniki są pokazywane osobno, dla każdego z trybów.

### Wykorzystywane technologie

W trakcie developmentu wykorzystujemy:

- JavaScript
- CSS, do stylowania aplikacji
- HTML, do definiowania struktury aplikacji
- LocalStorage, do zapisywania najlepszych wyników graczy
- Fetch, do łączenia z SWApi oraz pobierania obrazów z zasobów aplikacji
- JSON Server — do działania aplikacji lokalnie

### Uruchomienie projektu

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Zainstaluj zależności za pomocą komendy: `npm install`
2. Uruchom JSON Server przechodząc do folderu: `cd swapi-json-server`, za pomocą komendy: `npm start`
3. Uruchom aplikację `npm run start:dev`

Aplikacja będzie dostępna pod adresem [localhost:8765/index.html](localhost:8765/index.html)

Kod produkcyjny aplikacji umieszczamy w katalogu `src`.
