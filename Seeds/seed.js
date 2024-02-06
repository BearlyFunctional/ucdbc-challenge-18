const connection = require('../config/connection');
const {Thought, User } = require('../models');

connection.once('open', async () => {
    console.log('connected')
    let ReactionCheck = await connection.db.listCollections({ name: 'reactions' }).toArray();
        if (ReactionCheck.length) {
        await connection.dropCollection('reactions');
    }
    let ThoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
        if (ThoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }
    let UserCheck = await connection.db.listCollections({ name: 'users' }).toArray();
        if (UserCheck.length) {
        await connection.dropCollection('users');
    }

    await User.insertMany([
        {
            username: "Jebediah Kerman",
            email: "jeb@KSA.com"
        },
        {
            username: "Gordon Freeman",
            email: "DRFreeman@blackmesa.org"
        },
        {
            username: "Courier 6",
            email: "akickinthehead@vaulttec.org"
        },
        {
            username: "Roboute Guilliman",
            email: "victory@IOM.vox"
        },
        {
            username: "Mandalorian",
            email: "DinDjarin@mandalore.net"
        },
    ])

    await Thought.insertMany([
        {
            thoughtText: "I'm going to space!",
            username: "Jebediah Kerman"
        },
        {
            thoughtText: "......",
            username: "Gordon Freeman"
        },
        {
            thoughtText: "Has anyone seen a man in a checkered suit?",
            username: "Courier 6"
        },
        {
            thoughtText: "To admit defeat is to blaspheme against the Emperor.",
            username: "Roboute Guilliman"
        },
        {
            thoughtText: "This is the way.",
            username: "Mandalorian"
        },
    ])

    Thought.find({})
        .then(dbThoughtData => {
        console.log('Thoughts:');
        console.log(dbThoughtData);
    })
    .catch(err => {
        console.error(err);
    });

    console.table(await User.find({}));
    console.info('Seeding complete! 🌱');
    process.exit(0);
})