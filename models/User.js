const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: "Review"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
    },
    {
        id: false
    }
);

// used to get friend count https://mongoosejs.com/docs/tutorials/virtuals.html
userSchema.virtual("friendCount").get(function () {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User
