function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};
let colorArray = ['red', 'green', 'blue']
$('button').on('click', () => {
  console.log('click works');
  createSquares(30);
  // $('.squares').css('background-color', colorArray[getRandomInt(0, colorArray.length)]);

});
function createSquares(numberOfSquares) {
  for ( let i = 0; i <= numberOfSquares; i++ ) {
    applyRandomColor();
    const $div = $('<div/>');
    $('.squares').append($div);
  }
}
const applyRandomColor = (square) => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1){
    square.css('background-color', 'red')
  } else if (randomNum == 2) {
    square.css('background-color', 'blue')
    else {
    square.css('background-color', 'green')
    }
  }
}
