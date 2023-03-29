const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find().then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },

    postUser(req, res) {
        User.create(req.body)
            .then(usersData => res.json(usersData))
            .catch(err => res.status(400).json(err))
    },

    findUser(req, res) {
        User.findOne({ _id: req.params.id })
            .then((usersData) => {

                if (!usersData) {
                    return res.status(404).json({
                        message: "could not find a user with this id"
                    });
                }
                res.json(usersData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteUser(req, res) {
        console.log(req.params.id);
        User.findOneAndDelete({ _id: req.params.id })

            .then(usersData => {
                if (!usersData) {
                    res.status(404).json({
                        message: 'user successfully deleted',
                    })
                }
            })
            .then(() => res.json({
                message: "user successfully deleted"
            })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    editUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({
                        message: "No user located with this id.",
                    });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(400).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id }, {
            $push: { friends: req.params.friendsId }
        },
            { runValidators: true, new: true })
            .then(user => {
                if (!user) {
                    res.status(404).json({
                        message: "User not found"
                    })
                }
                res.json({
                    message: "Friend added to the user"
                })
            })

            .catch((err) => res.status(400).json(err));

    },

    removeFriend(req, res) {
        User.findByIdAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendsId }, },
            { new: true, runValidators: true })

            .then((usersFriend) => {
                if (!usersFriend) {
                    res.status(404).json({ message: "No friend found with this id!" });
                    return;
                }
                res.json(usersFriend);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};