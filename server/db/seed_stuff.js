use co2_calculator
db.dropDatabase();


db.questions.insertMany(
    [
        {
            "section_id": 4,
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
                    "co2amount": 1
                },
                {
                    "text": "No, my old one is doing just fine!",
                    "co2amount": 1
                },
                {
                    "text": "Answer 4",
                    "co2amount": 1
                },
                {
                    "text": "Answer 5",
                    "co2amount": 2
                }
            ]
        },
        {
            "section_id": 4,
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
                    "co2amount": 1
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "How would you rate your internet usage?",
            "questionSubHeading": "(the cloud is someone else's computer!)",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "How often do you get a new mobile phone?",
            "questionSubHeading": "",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "What's your online video habbit like?",
            "questionSubHeading": "Are you still watching?",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "Do you shop online, or in the stores?",
            "questionSubHeading": "Assuming we aren't in the middle of a global pandemic",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "How much do you spend per month of new clothes?",
            "questionSubHeading": "Macklemore made thifting cool again",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "Do you have any pets?",
            "questionSubHeading": "",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        },
        {
            "section_id": 4,
            "type": "range",
            "questionHeading": "How much a month do you spend on personal care?",
            "questionSubHeading": "Consider Makeup/Personal Grooming services and products",
            "answers": [
                {
                    "text": "A little",
                    "co2amount": 10
                },
                {
                    "text": "A little More",
                    "co2amount": 12
                },
                {
                    "text": "More Again",
                    "co2amount": 15
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
                    "text": "Astronomical",
                    "co2amount": 222
                }
            ]
        }
    ]

)