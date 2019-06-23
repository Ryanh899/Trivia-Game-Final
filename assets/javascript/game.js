//arr of objects with all aspects of question 
var all = [{
    question: "What Native American language was Super Bowl XXX the first to be broadcast in?",
    answer: ["a. Spanish", "b. Navajo", "c. French", "d. Yupik"],
    explanation: "Navajo",
    picture: './assets/images/navajo.jpg'
},
{
    question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame?",
    answer: ["a. ten", "b. seven", "c. five", "d. one"],
    explanation: "five",
    picture: './assets/images/download.png'
},
{
    question: "What was Miami quarterback Bob Griese the first NFL football player to wear in a game, in 1977?",
    answer: ["a. Glasses", "b. sleeves", "c. helmet", "d. rainbow cleats"],
    explanation: "Glasses",
    picture: './assets/images/bob.jpg'
},
{
    question: "What record-setting quarterback was the NFL's 82nd draft pick in 1979?",
    answer: ["a. Peyton Manning", "b. Aaron Rodgers", "c. Troy Aikman", "d. Joe Montana"],
    explanation: "Joe Montana",
    picture: './assets/images/Montana-Joe-2.jpg'
}];

var correctAnswer = ["b. Navajo", "c. five", "a. Glasses", "d. Joe Montana"]
var approval = ["Nice", "You're a trivia pro", "Good Work", "A++"]
var disapproval = ["Not quite", "c'mon son", "bruh", "You're better than that"]
function approve () {
    goodJob = approval[Math.floor(Math.random()*approval.length)];
    return goodJob
}
function disapprove () {
    badJob = disapproval[Math.floor(Math.random()*disapproval.length)];
    return badJob
}
var timer = 30;
var right = 0;
var wrong = 0;
var i = -1;
var click;
var start;
//timer function 
function time() {
    timer--;
    $('#timer').html(timer)
    if (timer === 0 && click !== $('#answer')) {
        console.log(click)
        wrong++;
        console.log("no answer")
        transition(i)
        $('#phrase').html(`You miss 100% of the shots you don't take`)
        setTimeout(display, 4000)
    } else if (timer === 0) {
        display(i)
    } else if (i >= all.length)
        gameOver(start);
}
//on click start 
$('#start').on('click', function () {
    $('#start').hide()
    start = setInterval(time, 1000);
    display(i)
})
//writes question and answer 
function display() {
    $('#phrase').html('Good Luck!')
    i++
    $('#timer').show()
    $('#timer').html(30)
    console.log(i)
    timer = 30
    $('#question').html(all[i].question)
    $('#answer').html('')
    for (var n = 0; n < all[i].answer.length; n++) {
        $('#answer').append(`<div class="answer" data-attribute="${all[i].answer[n]}" id="${all[i].answer[n]}">${all[i].answer[n]}</div>`)
    }
}
//on click for answers 
$('#answer').on('click', function (event) {
    click = $(event.target).attr('id')
    console.log(click)
    if (click === correctAnswer[i]) {
        console.log('true')
        $('#phrase').html(approve())
        right++;
        transition(i)
        setTimeout(display, 4000)
    } else {
        console.log('false')
        $('#phrase').html(disapprove())
        wrong++;
        transition(i)
        setTimeout(display, 4000)
    }
})
//display correct answer, picture, description, right or wrong
function transition(i) {
    timer = 5;
    $('#timer').hide()
    $('#question').html(`<p>${all[i].explanation}</p>`)
    $('#answer').html(`<img id="picture" src="${all[i].picture}">`)
    console.log(`${all[i].picture}`)
    console.log(`right: ${right}, wrong: ${wrong}`)
}
//end of game 
function gameOver(clear) {
    clearInterval(clear)
    $('#phrase').html('')
    $('#timer').html('')
    $('#question').html(`<p>right: ${right}</p>`)
    $('#answer').html(`<p>wrong: ${wrong}</p>`)
}