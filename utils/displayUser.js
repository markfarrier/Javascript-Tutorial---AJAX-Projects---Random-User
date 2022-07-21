// needs the './' in the path
import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
	img.src = person.image;
	value.textContent = person.name;

	// in case it's not hardcoded in HTML
	title.textContent = `My name is`;

	// need to remove active buttons here too
	// in the case where you select a different button other than person, then click random user
	// otherwise the active button status of the different button will remain
	// and both this button and the person button will appear active
	removeActive(btns);

	// make the first button active, as it's the user button
	btns[0].classList.add('active');
	btns.forEach((btn) => {
		// i.e. data-label
		const label = btn.dataset.label;
		btn.addEventListener('click', () => {
			// label string matches the property of the object, which is why this works
			// console.log(person[label]);
			title.textContent = `My ${label} is`;
			value.textContent = person[label];
			// clear all buttons of active class
			removeActive(btns);
			// add active class to the button we want
			btn.classList.add('active');
		});
	});
};

export default displayUser;
