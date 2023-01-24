require('dotenv').config();
const axios = require('axios');
const inquirer = require('inquirer');

const apiKey = process.env.API_KEY;

const getData = async (movie) => {
	const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

	try {
		const response = await axios.get(apiUrl);
		console.log(response.data.BoxOffice);
	} catch (error) {
		console.error(error);
	}
};

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Search for a movie:',
			name: 'movie'
		}
	])
	.then((response) => {
		getData(response.movie);
	});
