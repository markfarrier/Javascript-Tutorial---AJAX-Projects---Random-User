const URL = 'https://randomuser.me/api/';

const getUser = async () => {
	const response = await fetch(URL);
	const data = await response.json();

	// array and info
	// console.log(data);
	// 1 item array containing the json
	// console.log(data.results);
	// the json object
	// console.log(data.results[0]);

	// destructure
	const person = data.results[0];

	const { phone, email } = person;
	const { large: image } = person.picture;
	const { password } = person.login;
	const { first, last } = person.name;
	// could do const {age} = person.dob instead
	const {
		dob: { age },
	} = person;
	const {
		street: { number, name },
	} = person.location;
	// below values must match the data-label in html (except image)
	return {
		image,
		// property:value
		// phone:phone,
		// shorthand if names are the same
		phone,
		email,
		password,
		age,
		street: `${number} ${name}`,
		name: `${first} ${last}`,
	};
};

export default getUser;
