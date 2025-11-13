const libri = [
  {
    dataLettura: "2025-11-10",
    titolo: "Titolo Libro 1",
    copertina: "img/covers/libro1.jpg",
    commento: "Molto interessante e ben scritto.",
    voto: 8
  },
  {
    dataLettura: "2025-10-25",
    titolo: "Titolo Libro 2",
    copertina: "img/covers/libro2.jpg",
    commento: "Piacevole ma un po' lento.",
    voto: 6
  }
];

libri.sort((a, b) => new Date(b.dataLettura) - new Date(a.dataLettura));

const container = document.getElementById('libri-lista');

libri.forEach(libro => {
  const div = document.createElement('div');
  div.className = 'libro-entry';
  div.innerHTML = `
    <img src="${libro.copertina}" alt="Copertina ${libro.titolo}" />
    <div class="libro-info">
      <h2>${libro.titolo}</h2>
      <p>${libro.commento}</p>
      <span class="voto">Voto: ${libro.voto}/10</span>
    </div>
  `;
  container.appendChild(div);
});
