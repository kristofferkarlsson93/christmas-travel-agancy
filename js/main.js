window.onload = () => {
	initEvents();
	checkScreenWidth();
	//changeOrderToLookGoodOnMobile();
}

const initEvents = () => {
	const form = document.body.querySelector('.login-form');
	form.addEventListener('submit', e => {
		e.preventDefault();
		const value = form.input.value.toLowerCase();
		if (value === "rätt svar") {
			document.body.querySelector('.login-container').style.display = 'none';
			document.body.style.background = "none";
			document.body.querySelector('.main-content').style.display = 'block';
		} else {
			form.input.classList.add('is-invalid');
			form.input.style.backgroundColor = "#fc8585";
		}
		return false;
	});
}


const checkScreenWidth = () => {
	if (window.innerWidth <= 481) {
		console.log("small");
		document.body.querySelector('.why-chose-heading').classList.remove('col-md-4')
		document.body.querySelector('.why-img').classList.remove('col-md-8')
		document.body.querySelector('.why-img').style.display = 'none';
	}
}

const changeOrderToLookGoodOnMobile = () => {
	if (true) {
		const imagesToChange = document.body.querySelectorAll('.should-refurnish-img');
		const contentToChange = document.body.querySelectorAll('.should-refurnish-text-content');
		[].forEach.call(imagesToChange, (element) => element.classList.add('push-md-4'));
		[].forEach.call(contentToChange, (element) => element.classList.add('pull-md-8'));
		console.log(imagesToChange);
	}
}