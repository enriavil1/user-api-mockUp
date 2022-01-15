import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 8000;

// specifies using json data
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
	console.log('TEST');

	res.send('Connected to homepage');
});

app.get('/users');

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
