let colorArray = ['red', 'green', 'blue']


  $('button').on('click', () => {
    console.log('click works');
    // When the user clicks the button, populate the squares
    createSquares(30);

  });


  // Create a function named createSquares, that takes
  // a parameter of an arbitary number and creates
  // divs according to the number in the square class

  const createSquares = (numberOfSquares) => {

    for (let i = 0; i < numberOfSquares; i++){
      // creating squares
      // e is short for event
      // e.currentTarget gives you the divs you are clicking on
      const $div = $('<div/>').on('click', disappearSquares)
      //  $(event.currentTarget).fadeTo('slow', 0);
        //$(event.currentTarget).css('opacity', 0);

      // this is where the color is applied
      applyRandomColor($div);
      // attach to the square class
      $('.squares').append($div);

    }
  };

  //Now we have a bunch of blue squares,
  // but we want our squares to have a random,
  // red, blue, or green color
  // try to write a function to make that happen.

  const applyRandomColor = (square) => {
    const randNum = Math.floor(Math.random() * 3) + 1;

    // im assuming square is a jquery object

    if(randNum === 1){
      square.css('background-color', 'red');
    } else if(randNum === 2){
      square.css('background-color', 'blue');
    } else {
      square.css('background-color', 'green');
    }


  }
  const disappearSquares = (e) => {
    //$(e.currentTarget).css('opacity', 0);
    $(e.currentTarget).fadeTo('fast', 0);
  }
