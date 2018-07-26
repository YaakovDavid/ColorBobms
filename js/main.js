//jQuery names for my html classes
const $div = $('div');
const $gameButton = $('.game-button');
const $submit = $('.submit');
var $h2 = $('h2');
let turn = 0;


//js for the landing page starts here

//Hide the game buttons
$gameButton.hide();

//1) Reveal the game-buttons and
//2) appends username to the page
//3) reset the text field to null
function getUsernameAndAppendName() {
  const $userName = $('input').val();
  $h2.html($userName);

  $submit.click(function () {
    const $userName = $('input').val();
    if ($userName !== '') {
      $gameButton.show();
      $h2.html('Hi ' + $userName);
      $('input').val('');
    } else {
      //Syntext help from David Azaria for this disabled click
      $submit.attr('disabled', false);
    };
  });
};
getUsernameAndAppendName();


//js for Boards 1,2 and 3 below

//restarts game so you can keep playing
function restartGame() {
  location.reload();
  turn = 0;
  clickBox();
};

//If player wins display alert
function checkForWin() {
  if (turn == 69) {
    setTimeout(() => {
      // youWonMessage();
      alert('Congrats, You Won! 😎')
      restartGame();
    }, 50);
  };
};

//This fuction includes the click and the color assaining functions, I wanted //to made them separite functions but had some issue with 'this' and when I //tried doing it as a callback function hade some sort of issue, I hope to fix //this when I have some time
function clickBox() {
  $div.click(function () {

    //I want to make this a separite function but the "this" doesn't follow //through
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

      $div.prop('onclick', null).off('click');

      //idea for this timeOut function from paris's tic toc toe game code
      setTimeout(() => {

        alert('You hit a B💣MB, press okay and try again');
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

