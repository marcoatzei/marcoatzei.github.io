const libri = [
{
author: "Milan Kundera"
title: "L'insostenibile leggerezza dell'essere"
endingDate: "10/03/2024"
editor: "Adelphi"
collana: ""
},
{
author: "Milan Kundera"
title: "La vita è altrove"
endingDate: "10/02/2024"
editor: "Adelphi"
collana: ""
},
{
author: "Stephen King"
title: "Joyland"
endingDate: "20/01/2024"
editor: "Sperling & Kupfer"
collana: ""
},
{
author: "Bret Easton Ellis"
title: "Meno di zero"
endingDate: "07/01/2024"
editor: "CDE - Bonpiani"
collana: ""
},
{
author: "Goffredo Parise"
title: "Sillabari"
endingDate: "31/12/2023"
editor: "Rizzoli"
collana: ""
},
{
author: "Maria Miceli"
title: "L'autostima"
endingDate: "12/12/2023"
editor: "Il Mulino"
collana: "Farsi un'idea"
},
{
author: "Andrew Ross Sorkin"
title: "Too big to fail"
endingDate: "23/07/2023"
editor: "De Agostini"
collana: "Oscar Mondadori - Bestsellers"
},
{
author: "Gabriel Garcia Marquez"
title: "Cronaca di una morte annunciata"
endingDate: "02/04/2023"
editor: "Mondadori"
collana: "Oscar Mondadori - Bestsellers"
},
{
author: "Ray Bradbury"
title: "Fahrenheit 451"
endingDate: "07/03/2023"
editor: "Mondadori"
collana: "Oscar Moderni"
},
{
author: "Dino Baldi"
title: "Morti favolose degli antichi"
endingDate: "19/02/2023"
editor: "Quodliber Compagnia Extra"
collana: ""
},
{
author: "Andre Agassi"
title: "Open: la mia storia"
endingDate: "24/01/2023"
editor: "Einaudi"
collana: "Super ET"
},
{
author: "Bill Gates"
title: "Clima: come evitare un disastro. Le soluzioni di oggi le sfide di domani"
endingDate: "26/11/2022"
editor: "La nave di Teseo"
collana: "i Fari"
},
{
author: "Toshikazu Kawaguchi"
title: "Finchè il caffè è caldo"
endingDate: "30/10/2022"
editor: "Garzanti"
collana: ""
},
{
author: "Mary Shelley"
title: "Frankenstein"
endingDate: "08/10/2022"
editor: "Mondadori"
collana: "Classici del mistero. Junior"
},
{
author: "Eugen Herrigel"
title: "Lo zen e il tiro con l'arco"
endingDate: "08/10/2022"
editor: "Adelphi"
collana: "Piccola biblioteca 25"
},
{
author: "Bram Stoker"
title: "Dracula"
endingDate: "26/07/2022"
editor: "Mondadori"
collana: "Libri per ragazzi"
},
{
author: "Daniel Defoe"
title: "Robinson Crusoe"
endingDate: "26/07/2022"
editor: "Giunti"
collana: "Giunti Kids classici per ragazzi"
},
{
author: "Lisa Iotti"
title: "8 secondi"
endingDate: "25/01/2022"
editor: "il Saggiatore"
collana: ""
},
{
author: "Marco Mondini"
title: "Andare per i luoghi della grande guerra"
endingDate: "25/01/2022"
editor: "il Mulino"
collana: "Ritrovare l'Italia"
},
{
author: "Jean Echenoz"
title: "Correre"
endingDate: "13/09/2021"
editor: "Adelphi"
collana: ""
},
{
author: "Murakami"
title: "L'arte di correre"
endingDate: "13/09/2021"
editor: "Einaudi"
collana: "Super ET"
},
{
author: "Giuseppe Pederiali"
title: "Il sogno del maratoneta"
endingDate: "13/09/2021"
editor: "Garzanti"
collana: ""
},
{
author: "Jostein Gaarder"
title: "Il mondo di Sofia"
endingDate: "26/06/2020"
editor: "Longanesi"
collana: ""
}
];

libri.sort((a, b) => new Date(b.endingDate) - new Date(a.endingDate));

const container = document.getElementById('libri-lista');

libri.forEach(libro => {
  const div = document.createElement('div');
  div.className = 'libro-entry';
  div.innerHTML = `
    <img src="${libro.copertina}" alt="Copertina ${libro.title}" />
    <div class="libro-info">
      <h2>${libro.title}</h2>
      <h2>${libro.author}</h2>
      <h2>${libro.editor}</h2>
      <h2>${libro.collana}</h2>
      <!--<p>${libro.commento}</p>
      <span class="voto">Voto: ${libro.voto}/10</span>-->
    </div>
  `;
  container.appendChild(div);
});
