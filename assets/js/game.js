// Questions

let question1 = {
    question: "Who was the killer in the the first 'Friday the 13th' movie?",
    choices: ['A drugged up camp counselor',
        'Jasons Mother',
        'Jason Voorhees',
        'Tommy Jarvis'],
    answer: 'Jasons Mother',
    condition: [false, true, false, false]
};

let question2 = {
    question: 'Where are the famous "Exorcist Steps" located?',
    choices: ['Washington, D.C',
        'Baltimore, MD',
        'Philidelphia, PA',
        'New York, NY'],
    answer: 'Washington, D.C',
    condition: [true, false, false, false]

};

let question3 = {
    question: '"Hellraiser" is based on what novel?',
    choices: ['Straight to Hell',
        'The Dark Lords Revenge',
        'The Hellbound Heart',
        'The Box to Hell'],
    answer: 'The Hellbound Heart',
    condition: [false, false, true, false]

};

let question4 = {
    question: 'Who was Wes Cravens first choice to play killer Freddy Krueger?',
    choices: ['David Warner',
        'Johnny Depp',
        'Charlie Sheen',
        'Jackie Earle Haley'],
    answer: 'David Warner',
    condition: [true, false, false, false]

};

let question5 = {
    question: 'When the movie "IT" was released, it was shipped to cinemas under the code name:',
    choices: ['Pennywise: The Dancing Clown',
        'Are you afraid of the dark?',
        'Clown Makeup and Other Accessories',
        'Pound Foolish'],
    answer: 'Pound Foolish',
    condition: [false, false, false, true]

};

//Question to Array
let totalQuestions = [question1, question2, question3, question4, question5];
//Right Answers
let rightAnswers = 0;
//Wrong Answers
let wrongAnswers = 0;
let questionIndex = 0;
//Answer Variable
let userAnswer;
let mySong = document.getElementById('themeMusic');
$(document).ready(function () {
    $('#themeMusic').hide();
    
    //Display Question
    function giveQuestions(questionSelect) {
        //Reset the Timer
        timer.reset();
        //Show Question
        $('#question').html(totalQuestions[questionSelect].question);
        //Display Choices
        $('#opt1').text(totalQuestions[questionSelect].choices[0]).show();
        $('#opt2').text(totalQuestions[questionSelect].choices[1]).show();
        $('#opt3').text(totalQuestions[questionSelect].choices[2]).show();
        $('#opt4').text(totalQuestions[questionSelect].choices[3]).show();

    }

    //Start when Pumpkin is clicked
    function startGame() {
       giveQuestions(questionIndex);
        timer.start();
        
        }

    //Add a point if Answer is Correct
    function right() {
        rightAnswers++;
    };

    //Add to Wrong Count
    function wrong() {
        wrongAnswers++;

    };


    //Timer Variable
    let timer = {
        time: 10, //
        //Time Reset
        reset: function () {
            this.time = 10;
            $('.timer').html('<div>' + this.time);
            
        },
        //Counter
        start: function () {
            counter = setInterval(timer.count, 1000); //sets interval
        },
        //Clear Interval
        stop: function () {
            clearInterval(counter);
        },

        count: function () {
            timer.time--;


            if (timer.time >= 0) {
                $('.timer').html(timer.time);
            } else if (timer.time <= 0) {
                //Timer Runs Out
                alert('Time is up! The correct answer is ' + totalQuestions[questionIndex].answer) ;
                questionIndex++;
                wrong();
                timer.reset();
                
                if (questionIndex < totalQuestions.length) {
                    giveQuestions(questionIndex);
                } else {
                    timer.reset();
                    $('.btn').hide();
                    $('.timer').hide();
                    $('.question').hide();
                    alert(' You got ' + rightAnswers + " correct!");
                    $('#nextButton').show();

                }
            }
        }
    }

    //User's click
    startGame();
    
    $('.btn').on('click', function () {
        if (this.id === 'opt1') {
            userAnswer = 'opt1';
        } else if (this.id === 'opt2') {
            userAnswer = 'opt2';
        } else if (this.id === 'opt3') {
            userAnswer = 'opt3';
        } else if (this.id === 'opt4') {
            userAnswer = 'opt4';
        }

        if ((userAnswer === 'opt1') && totalQuestions[questionIndex].condition[0] === true) {
            right();
            alert("Correct!");
        } else if (userAnswer === 'opt1') {
            wrong();
            alert("Incorrect! The correct answer is " + totalQuestions[questionIndex].answer);
        } if ((userAnswer === 'opt2') && totalQuestions[questionIndex].condition[1] === true) {
            right();
            alert("Correct!");
        } else if (userAnswer === 'opt2') {
            wrong();
            alert("Incorrect! The correct answer is " + totalQuestions[questionIndex].answer);
        } if ((userAnswer === 'opt3') && totalQuestions[questionIndex].condition[2] === true) {
            right();
            alert("Correct!");
        } else if (userAnswer === 'opt3') {
            wrong();
            alert("Incorrect! The correct answer is " + totalQuestions[questionIndex].answer);
        } if ((userAnswer === 'opt4') && totalQuestions[questionIndex].condition[3] === true) {
            right();
            alert("Correct!");
        } else if (userAnswer === 'opt4') {
            wrong();
            alert("Incorrect! The correct answer is " + totalQuestions[questionIndex].answer);
        }

        $('#question').text('');
        $('#opt1').text('');
        $('#opt2').text('');
        $('#opt3').text('');
        $('#opt4').text('');
        questionIndex++;
        if (questionIndex < totalQuestions.length) {
            giveQuestions(questionIndex);
        } else {
            $('.btn').hide();
            $('.timer').hide();
            alert(' You got ' + rightAnswers + ' correct and ' + wrongAnswers + ' incorrect!');
            $('#nextButton').show();
        }
    })
})



