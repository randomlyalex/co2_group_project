use co2_calculator
db.dropDatabase();


db.questions.insertMany(
    [
        {
            "section_id": 3,
            "type": "radio",
            "questionHeading": "Have you bought a new laptop in the last year?",
            "questionSubHeading": "",
            "answers": [
                {
                    "text": "Yes, Shiny new MacBook",
                    "co2amount": 1
                },
                {
                    "text": "Yes, but it was second hand",
                    "co2amount": 0.01
                },
                {
                    "text": "No, my old one is doing just fine!",
                    "co2amount": 0
                }
            ]
        },
        {
            "section_id": 3,
            "type": "checkbox",
            "questionHeading": "What appliances do you use on average?",
            "questionSubHeading": "",
            "answers": [
                {
                    "text": "Microwave Oven",
                    "co2amount": 0.04
                },
                {
                    "text": "Electric Tumble Dryer",
                    "co2amount": 0.15
                },
                {
                    "text": "Gas Hob most days",
                    "co2amount": 0.07
                },
                {
                    "text": "Gas oven occasionally",
                    "co2amount": 0.038
                },
                {
                    "text": "Electric hob most days",
                    "co2amount": 0.13
                },
                {
                    "text": "Electric oven occasionally",
                    "co2amount": 0.091
                },
                {
                    "text": "Dishwasher (once every 3 days)",
                    "co2amount": 0.51
                },
                {
                    "text": "Dishwasher (every day)",
                    "co2amount": 1.2
                },
                {
                    "text": "Fridge - Freezer A+",
                    "co2amount": 0.116
                },
                {
                    "text": "TV 34-37 inches",
                    "co2amount": 0.2
                },
                {
                    "text": "TV 37-80 inches",
                    "co2amount": 0.35
                }
                 

            ]
        },
        {
            "section_id": 3,
            "type": "checkbox",
            "questionHeading": "What big purchases have you made in the last year?",
            "questionSubHeading": "(only consider new purchases)",
            "answers": [
                {
                    "text": "Sofa",
                    "co2amount": 1
                },
                {
                    "text": "Fridge Freezer",
                    "co2amount": 1
                },
                {
                    "text": "Car",
                    "co2amount": 1.5
                }

            ]
        },
        {
            "section_id": 3,
            "type": "range",
            "questionHeading": "How would you rate your internet usage?",
            "questionSubHeading": "(the cloud is someone else's computer!)",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 0.01
                },
                {
                    "text": "A little More",
                    "co2amount": 0.03
                },
                {
                    "text": "More Again",
                    "co2amount": 0.04
                },
                {
                    "text": "Loads",
                    "co2amount": 0.05
                },
                {
                    "text": "Too Much!",
                    "co2amount": 0.1
                }
            ]
        },
        {
            "section_id": 3,
            "type": "radio",
            "questionHeading": "How often do you get a new mobile phone?",
            "questionSubHeading": "it might be 'free' but its not free to make",
            "answers": [
                {
                    "text": "I get more than two a year",
                    "co2amount": 0.25
                },
                {
                    "text": "Annual",
                    "co2amount": 0.1
                },
                {
                    "text": "Every two years",
                    "co2amount": 0.005
                },
                {
                    "text": "Never i'm still using an old Nokia",
                    "co2amount": 0
                }
            ]
        },
        {
            "section_id": 3,
            "type": "radio",
            "questionHeading": "What's your online video habit like?",
            "questionSubHeading": "Are you still watching?",
            "answers": [
                {
                    "text": "Whats the internet? (Liar you're on it now)",
                    "co2amount": 0
                },
                {
                    "text": "An hour a week",
                    "co2amount": 0.001
                },
                {
                    "text": "A few hours a week",
                    "co2amount": 0.01
                },
                {
                    "text": "Everyday",
                    "co2amount": 0.09
                },
                {
                    "text": "Mostly the weekend",
                    "co2amount": 0.07
                },
                {
                    "text": "Its always on as background noise",
                    "co2amount": 1.5
                }
            ]
        },
        {
            "section_id": 3,
            "type": "range",
            "questionHeading": "Do you shop online, or in the stores?",
            "questionSubHeading": "Assuming we aren't in the middle of a global pandemic",
            "answers": [
                {
                    "text": "All online baby",
                    "co2amount": 0.5
                },
                {
                    "text": "I struggled to use this website, i'd rather it was printed out",
                    "co2amount": 2
                },
                {
                    "text": "Half and Half",
                    "co2amount": 0.75
                }
            ]
        },
        {
            "section_id": 3,
            "type": "range",
            "questionHeading": "How much do you spend per month of new clothes?",
            "questionSubHeading": "Macklemore made thifting cool again",
            "answers": [
                {
                    "text": "zero, I either wear nothing, or its all second hand",
                    "co2amount": 0
                },
                {
                    "text": "<£10 a week",
                    "co2amount": 0.1
                },
                {
                    "text": "£10 - £50",
                    "co2amount": 0.5
                },
                {
                    "text": "350 - £100",
                    "co2amount": 1
                },
                {
                    "text": "£100 - £500",
                    "co2amount": 2
                },
                {
                    "text": "I might as well be Beyonce",
                    "co2amount": 5
                }
            ]
        },
        {
            "section_id": 3,
            "type": "checkbox",
            "questionHeading": "Do you have any pets?",
            "questionSubHeading": "",
            "answers": [
                {
                    "text": "A small dog or similar",
                    "co2amount": 0.5
                },
                {
                    "text": "A large dog or similar",
                    "co2amount": 2
                },
                {
                    "text": "a cat or two",
                    "co2amount": 1
                },
                {
                    "text": "We basically live on a farm",
                    "co2amount": 10
                },
            ]
        },
        {
            "section_id": 3,
            "type": "range",
            "questionHeading": "How much a month do you spend on personal care?",
            "questionSubHeading": "Consider Makeup/Personal Grooming services and products",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 0.001
                },
                {
                    "text": "A little More",
                    "co2amount": 0.05
                },
                {
                    "text": "Admittedly quite a bit!",
                    "co2amount": 0.2
                },
                {
                    "text": "Loads",
                    "co2amount": 20
                },
                {
                    "text": "Too Much!",
                    "co2amount": 22
                },
                {
                    "text": "Even Mooooore!",
                    "co2amount": 52
                },
                {
                    "text": "I'm basically Beyonce",
                    "co2amount": 222
                }
            ]
        }
    ]

)