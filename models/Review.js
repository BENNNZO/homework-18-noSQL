const { Schema, model } = require('mongoose')

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			maxlength: 200,
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			immutable: true,
			default: () => Date.now()
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
)


const reviewSchema = new Schema(
	{
		reviewText: {
			type: String,
			required: true,
			maxlength: 200,
			minlength: 1,
		},
		createdAt: {
			type: Date,
			immutable: true,
			default: () => Date.now(),
			get: function (timestamp) {
				return timestamp.toLocaleString()
			}

		},
		username: {
			type: String,
			required: true,
		},
		reactions: {
			type: Date,

		},
		reactions: [reactionSchema]
	},
	{
		id: false,
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
)

reviewSchema.virtual('reactionCount').get(function () {
	return this.reactions.length
})

const Review = model('Review', reviewSchema)

module.exports = Review
