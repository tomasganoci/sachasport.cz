Dokumentace k Front-End eshopu Sachasport
    1. Když budeš chtít pokračovat na jiném PC - tak v VSC dej stáhnout z repozitáře - https://github.com/tomasganoci/Shoptet-Frontend
    2. Stáhni Node.js do PC.
    3. Spusť v konzoli "npm install" a to nainstaluje všechny náležitosti.

Zpracování souboru
CSS: přes Live Saas Compiler (rozšíření) - nastavit pouze soubor sachasport.scss
JavaScript: přes Webpack použít příkaz "npm run build"

Použití Visual Studio Code - doplňky
    - Čeština
    - HTML CSS Support
    - JSObfuscator - ztěžení přečtení JS - musí se do vyhlédávání zadat >obfuscator - ale hrozně se navýší velikost souboru
    - Live Sass Compiler - nastavil jsem ho, ať mi zprácovává pouze jeden soubor sachasport.scss. Přes Webpack to dělá chyby s Fonty.
    - PHP Intelephense - musel se vypnout vestavěný doplněk PHP
    - Prettier - Code formatter - super věc na zpehlednění kódů. Mám ho nastavený jako výchozí na PHP a JS
    - SCSS ItelliSense

Poznatky
    - Přes Gulp nejde zpracovat JavaScripty... bral by je všechny z jedné složky .... pouze by je spojil dohromady jako text
    - Přes Webpack nejde zpracovat SCSS prototže to chce vytvořit další soubor v javascriptu a to je blbost... 
    - Asi řešení je, že to bude jedno tak a druhé tak... co je na prd...