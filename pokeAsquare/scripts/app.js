$('button').on('click', () => {
  console.log('click works');
  createSquares(30);
});
function createSquares(numberOfSquares) {
  for ( let i = 0; i <= numberOfSquares; i++ ) {
    const $div = $('<div/>');
    $('.squares').append($div);
  }
}
