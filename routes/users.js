import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

let users = [
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 25,
		id: uuidv4(),
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		age: 24,
		id: uuidv4(),
	},
];

// all routes start with /users by default
router.get('/', (req, res) => {
	console.log(users);
	res.send(users);
});

router.post('/', (req, res) => {
	console.log('Post route reached');

	const user = req.body;
	user.id = uuidv4();

	users.push(user);
	console.log(user);
	res.send(`User with a first name of ${user.firstName} and lastname of ${user.lastName}`);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find((user) => user.id === id);

	res.send(user);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	users = users.filter((user) => user.id !== id);

	res.status(202).send(users);
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	const user = users.find((user) => user.id === id);

	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.status(200).send(user);
});

export default router;
