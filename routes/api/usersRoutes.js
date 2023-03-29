const router = require('express').Router();
const { getUsers, postUser, findUser, deleteUser, editUser, addFriend, removeFriend } = require('../../controllers/usersController')

router.route('/')
	.get(getUsers)
	.post(postUser)

router.route('/:id')
	.get(findUser)
	.delete(deleteUser)
	.put(editUser)

router.route('/:id/friends/:friendsId')
	.delete(removeFriend)
	.post(addFriend)

module.exports = router;