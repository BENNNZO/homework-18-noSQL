const userData = [
    {
        username: 'benjamin',
        email: 'benjamin@gmail.com',
        _id: '642450dd44cc16c722277b1f'
    },
    {
        username: 'maggie',
        email: 'maggie2004@gmail.com',
        _id: '642450e5d4714e14409c45da'
    },
    {
        username: 'kate',
        email: 'kate537@gmail.com',
        _id: '642450eb009346a24bdc6e1e'
    },
    {
        username: 'brandon',
        email: 'brandonnn@gmail.com',
        _id: '642450f0cfe790ef0b449028'
    },
    {
        username: 'robert',
        email: 'roberto@gmail.com',
        _id: '642450f96d9de506fc3e8f67'
    },
    {
        username: 'abbie',
        email: 'abbigale@gmail.com',
        _id: '642450fe94ea5a3ef7f3b5ca'
    }
]

const reviewsData = [
    {
        _id: '64245358388e1e96e9fd359b',
        reviewText: "chat-gpt is getting a little scary",
        createdAt: "3/20/2023, 12:14:21 PM",
        username: "maggie",
        reactions: [
            {
                reactionBody: "i know and all the other AI tools aswell",
                username: "benjamin"
            }
        ]
    },
    {
        _id: '64245360c7572b0245523c2e',
        reviewText: "hope that new pizza shop will open soon",
        createdAt: "3/20/2023, 3:25:45 PM",
        username: "kate",
        reactions: [
            {
                reactionBody: "I think it opens next week",
                username: "brandon"
            },
            {
                reactionBody: "can't wait either",
                username: "benjamin"
            }
        ]
    },
    {
        _id: '642453667d4f21799a87bf86',
        reviewText: "Finnaly got to go to the Coca-Cola factory!",
        createdAt: "3/21/2023, 7:52:32 PM",
        username: "brandon",
        reactions: [
            {
                reactionBody: "whish i could've gone :(",
                username: "kate"
            },
            {
                reactionBody: "sounds like funnn!",
                username: "robert"
            }
        ]
    },
    {
        _id: '64245371d2d8339bd57e315d',
        reviewText: "anyone have the answers for the history homework",
        createdAt: "3/23/2023, 6:19:42 PM",
        username: "abbie",
        reactions: [
            {
                reactionBody: "no sorry",
                username: "benjamin"
            },
            {
                reactionBody: "dm me",
                username: "robert"
            }
        ]
    },
    {
        _id: '64245375f0698a5a991a3f4d',
        reviewText: "Havent played minecraft inna while",
        createdAt: "3/24/2023, 4:56:38 PM",
        username: "robert",
        reactions: [
            {
                reactionBody: "sameeee",
                username: "abbie"
            },
            {
                reactionBody: "we should make a new world",
                username: "kate"
            }
        ]
    }
]

module.exports = { userData, reviewsData };