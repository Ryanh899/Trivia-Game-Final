//arr of objects with all aspects of question 
var all = [{
    question: "What Native American language was Super Bowl XXX the first to be broadcast in?",
    answer: ["a. beer", "b. Navajo", "c. beer", "d. beer"],
    explanation: "Nav",
    picture: '../images/DSC_3981.jpg'
},
{
    question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame?",
    answer: ["a. beer", "b. beer", "c. five", "d. beer"],
    explanation: "Beer",
    picture: '../images/DSC_3981.jpg'
},
{
    question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977?",
    answer: ["a. Glasses", "b. beer", "c. beer", "d. beer"],
    explanation: "Glasses",
    picture: '../images/DSC_3981.jpg'
},
{
    question: "What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
    answer: ["a. beer", "b. beer", "c. beer", "d. Joe Montana"],
    explanation: "Joe",
    picture: '../images/DSC_3981.jpg'
}];

var correctAnswer = ["b. Navajo", "c. five", "a. Glasses", "d. Joe Montana"]
var timer = 10;
$('#timer').html(10)
var right = 0;
var wrong = 0;
var i = -1;
var click;
//timer function 
function time() {
    timer--;
    $('#timer').html(timer)
    if (timer === 0 && click !== $('#answers')) {
        console.log(click)
        wrong++;
        console.log("no answer")
        transition(i)
        setTimeout(display, 4000)
    } else if (timer === 0) {
        display()
    }
}
//on click start 
$('#start').on('click', function () {
    setInterval(time, 1000);
    display(i)
})

//writes question and answer 
function display() {
    i++
    console.log(i)
    timer = 10
    $('#timer').html(timer)
    $('#question').html(all[i].question)
    $('#answers').html('')
    for (var n = 0; n < all[i].answer.length; n++) {
        $('#answers').append(`<div class="answer" data-attribute"${all[i].answer[n]}" id="${all[i].answer[n]}">${all[i].answer[n]}</div>`)
    }
}
//on click for answers 
$('.answer').on('click', function (event) {
    click = $(this).attr('id')
    specific = $(this).attr('data-attribute')
    console.log(click)
    console.log(specific)
    if (click === correctAnswer[i]) {
        console.log('true')
        right++;
        transition(i)
        setTimeout(display, 4000)
    } else {
        console.log('false')
        wrong++;
        transition(i)
        setTimeout(display, 4000)
    }
})

//display correct answer, picture, description, right or wrong
function transition(i) {
    timer = 5;
    $('#timer').html('Answer')
    $('#question').html(`<p>${all[i].explanation}</p>`)
    $('#answers').html(`<img url="${all[i].picture}">`)
}

//end of game 
