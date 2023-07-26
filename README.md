# exercise-2
Simple web application that showcases dynamic creation and removal of HTML elements, specifically div boxes, based on user interaction. It shows DOM manipulation, handling user input, and dynamically altering CSS properties.

https://tsmolarczyk.github.io/exercise-2/

## Treść zadania
Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów w input i klika Utwórz, po czym zostaje utworzona kolekcja. Po kliknięciu Usuń, kolekcja elementów zostaje usunięta.

Utwórz funkcję createBoxes(amount), która ogłasza 1 parametr amount - liczbę. Funkcja tworzy tyle div, ile określono w amount i dodaje je do div#boxes.

- Rozmiary pierwszego div 30px na 30px.
- Każdy następny div powinien być szerszy i wyższy od poprzedniego o 10px.
- Każdy utworzony div powinien mieć losowy kolor tła rgb.

Utwórz funkcję destroyBoxes(), która usuwa div#boxes.
