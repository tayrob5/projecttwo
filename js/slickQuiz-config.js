// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Are you addicted to your phone?",
        "main":    "<p>Take this quiz to see just how addicted you are to your phone.</p>",
        "results": "<h5>Now you're aware.</h5><p>Phone addiction is a real thing. As technology continues to advance, we need to be intentional about not overusing our devices.</p>",
        "level1":  "Congrats, you aren't addicted to your phone!",
        "level2":  "You're better than most at not using your phone.",
        "level3":  "You fall into the majority, you use your phone a lot.",
        "level4":  "You're addicted.",
        "level5":  "Seriously? You should probabaly re-evaluate your phone usage." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Do you use your phone during meals?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Nice!</span> I'm proud of you!</p>",
            "incorrect": "<p><span>You dog, you.</span> I won't be getting a meal with you anytime soon.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Do you use your phone during sexual activites?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>What a relief!</span> Glad you enjoy the time with your person.</p>",
            "incorrect": "<p><span>Really? ... Really?</span> I feel bad for your partner!</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Is checking your phone the first thing you do in the morning?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Wow!</span> You are in the 20% of people who do not - good for you.</p>",
            "incorrect": "<p><span>Yeah, me too!</span> We all do it! No judgment here.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Do you use your phone while you drive?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>The world thanks you!</span> You're making the world a better place and preventing accidents. The world thanks you!</p>",
            "incorrect": "<p><span>That's dangerous!</span> Please be careful :)</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Do you feel lost without your phone?",
            "a": [
                {"option": "Yes",      "correct": false},
                {"option": "No",     "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Excellent!</span> Sounds like you're a great person to hang out with.</p>",
            "incorrect": "<p><span>You should practice 'unplugging'.</span> It might be time to take a break from the phone.</p>" // no comma here
        }
    ]
};
