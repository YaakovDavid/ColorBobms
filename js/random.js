let turn =0;
//mike helped me with this
const $grid1 = $('.grid-1');
const $grid2 = $('.grid-2');
const $grid3 = $('.grid-3');
const $grid4 = $('.grid-4');
const $grid5 = $('.grid-5');
const $grid6 = $('.grid-6');
const $grid7 = $('.grid-7');
const $grid8 = $('.grid-8');
const $grid9 = $('.grid-9');

const colors = ['red', 'orange', 'yellow', 'blue', 'green'];

//this makes the board and the colors inside
//and randomizes the colors
function populateGrid(grid) {
  for (let index = 0; index < 9; index++) {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    grid.append(`<div class="${randColor}"></div>`)
  };
};

populateGrid($grid1);
populateGrid($grid2);
populateGrid($grid3);
populateGrid($grid4);
populateGrid($grid5);
populateGrid($grid6);
populateGrid($grid7);
populateGrid($grid8);
populateGrid($grid9);
//mike helped me with the above


//the below is basically a copy from my main.js file
//the reason I'm not just using it is bc I'm in middle
//of working on this file and I'm not sure how it will come out
function restartGame() {
  $('div').css('background-color', 'rgb(78, 230, 245')
  //found this location.reload on stackoverflow
  location.reload();
  turn = 0;
  clickBox();
};

//If player wins display alert
function checkForWin() {
  if (turn == 69) {
    setTimeout(() => {
      alert('Congrats, You Won! 😎')
      restartGame();
    }, 50);
  };
};

function clickBox() {
  $('div').click(function () {

    //I want to make this a separet function but the "this" doesn't follow //through
    if (this.className === 'green') {
      $(this).css('background-color', 'green');

    } else if (this.className === 'blue') {
      $(this).css('background-color', 'rgb(70, 187, 255)');

    } else if (this.className === 'yellow') {
      $(this).css('background-color', 'yellow');

    } else if (this.className === 'orange') {
      $(this).css('background-color', 'rgb(252, 164, 69)');

    } else if (this.className === 'red') {
      $('.red').css('background-color', 'red');

      $('div').prop('onclick', null).off('click');

      //idea for this timeOut function from paris's tic toc toe game code
      setTimeout(() => {

        alert('You hit a B💣MB,  press okay and try again');
        restartGame();
      }, 50);
    };

    $(this).prop('onclick', null).off('click');
    turn++;
    console.log(turn);
    checkForWin();
  });
};
clickBox();
