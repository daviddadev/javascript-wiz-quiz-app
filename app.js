// Create questions
let questions = [
    new Question("What singer/actor gave Marilyn Monroe a white poodle named Mafia? ", ["Frank Sinatra", "Billy Ray"], "Frank Sinatra"),
    new Question("Who is the absolute worst President of the United States?", ["Donald Trump", "Donald Duck"], "Donald Trump"),
    new Question("Who were the first television couple to be shown in bed together on prime time television?", ["Lucy & Ricardo", "Fred & Wilma Flinstone"], "Fred & Wilma Flinstone"),
    new Question("Who was the first Twitter user to reach 20 million followers? Her songs include The Edge of Glory, Judas, Born This Way, Bad Romance, and Poker Face?", ["Kathy Perry", "Lady Gaga"], "Lady Gaga"),
    new Question("Both of these things come in a posh box: a Rolex and what British soccer star?", ["David Beckham", "Alex Rodriguez"], "David Beckham"),
    new Question("Here’s the team name: Stuffing Torrey’s Holes Like Tiger. In what state is Torrey Pines located?", ["Florida", "California"], "California"),
    new Question("What is Marvel's Thor God of?", ["Lightning", "Thunder"], "Thunder"),
    new Question("Which inventor created the ligh bulb?", ["Thomas Jefferson", "Thomas Edison"], "Thomas Edison"),
    new Question("Who was the first person to invent the car?", ["Henry Ford", "Karl Benz"], "Karl Benz"),
    new Question("Billie Holiday was the babysitter for what future Oscar host?", ["Bill Cosby", "Billy Crystal"], "Billy Crystal")
];

// Create Quiz //
let quiz = new Quiz(questions);

// Display Quiz //
QuizUI.displayNext();