// Mobile Nav Trigger
const menuButton = document.getElementById('mobile-trigger')
const closeButton = document.getElementById('mobile-close-trigger')

menuButton.addEventListener('click', () => {
	console.log('menu Click!')
	document.getElementById('mobile-menu').style.width = "85%";
});

closeButton.addEventListener('click', () => {
	document.getElementById('mobile-menu').style.width = 0;
});

// Dark Mode
const body = document.body;
const switcher = document.getElementsByClassName('js-toggle')[0];
const house = document.getElementsByName('house-icon')

//Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
switcher.addEventListener("click", function() {
  this.classList.toggle('js-toggle--checked');
  this.classList.add('js-toggle--focus');
	//If dark mode is selected
	if (this.classList.contains('js-toggle--checked')) {
		body.classList.add('dark-mode');
		house.forEach(e => {
			e.classList.remove('fa-house-day')
			e.classList.add('fa-house-night')
		})

		//Save user preference in storage
		localStorage.setItem('darkMode', 'true');
	} else {
		body.classList.remove('dark-mode');
		house.forEach(e => {
			e.classList.add('fa-house-day')
			e.classList.remove('fa-house-night')
		})
		setTimeout(function() {
			localStorage.removeItem('darkMode');
		}, 100);
	}
})

//Check Storage. Keep user preference on page reload
if (localStorage.getItem('darkMode')) {
	//body.classList.add('dark-mode');
  switcher.classList.add('js-toggle--checked');
  body.classList.add('dark-mode');
		house.forEach(e => {
			e.classList.remove('fa-house-day')
			e.classList.add('fa-house-night')
		})
}

// Latest Post
//this doesn't exist yet, but will pull the latest post from https://www.remysheppard.com/index.xml