//string interpolation with tick sign ``
var song = {
  id: 9999,
  name: 'Yellow Submarine',
  source: 'http//example.com/song.mp3'
};

var html = `
<h1 data-id="${song.id}">
${song.name}
</h1>
<audio src="${song.source}"></audio>
`;
$('.container').append(html);
