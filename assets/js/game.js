let currentQuestion = 0;
let score = 0;





$('.carousel').carousel({
    interval: false
}) 


let questions = [{
    "Q": "Who was the killer in the the first 'Friday the 13th' movie?",
    "1": "A drugged up camp counselor",
    "2": "Jason's Mother",
    "3": "Jason Voorhees",
    "4": "Tommy Jarvis",
    "A": "2"
},
{
    "Q": "Where are famous 'Exorcist Steps' located?",
    "1": "Washington, D.C",
    "2": "Baltimore, MD",
    "3": "Philidelphia, PA",
    "4": "New York, NY",
    "A": "1"
},
{
    "Q": "'Hellraiser' is based on what novel?",
    "1": "Straight to Hell",
    "2": "The Dark Lord's Revenge",
    "3": "The Hellbound Heart",
    "4": "The Box to Hell",
    "A": "3"
},

{
    "Q": "True or False: The words 'Elm Street' are not spoken at all during the movie, 'Nightmare on Elm Street.'",
    "1": "True",
    "2": "False",
    "A": "1"
},

{
    "Q": "When the movie 'IT' was released, it was shipped to cinemas under the code name:",
    "1": "Pennywise: The Dancing Clown",
    "2": "Are you afraid of the dark?",
    "3": "Clown Makeup and Other Accessories",
    "4": "Pound Foolish",
    "A": "4"
}
]

let container = document.getElementById("questionBox");

