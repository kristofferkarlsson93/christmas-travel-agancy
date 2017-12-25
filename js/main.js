window.onload = () => {
	initEvents();
	removeUnwantedElementOnSmallScreen();
	controlImgFlipper();
	removeShakeOnSmallScreens();
}

const initEvents = () => {
	const form = document.body.querySelector('.login-form');
	form.addEventListener('submit', e => {
		e.preventDefault();
		const value = form.input.value.toLowerCase();
		if (value === "väl inslaget" || value === 'väl inslagen') {
			document.body.querySelector('.login-container').style.display = 'none';
			document.body.style.background = "none";
			document.body.querySelector('.main-content').style.display = 'block';
			document.body.querySelector('.travel-heading').style.animation = '1s ease-out 0s 1 dropHeader';
			document.title = 'God Jul, Anna-Karin!'
		} else {
			form.input.classList.add('is-invalid');
			form.input.style.backgroundColor = "#fc8585";
		}
		return false;
	});
}

const removeUnwantedElementOnSmallScreen = () => {
	if (window.innerWidth <= 481) {
		console.log("small");
		document.body.querySelector('.why-chose-heading').classList.remove('col-md-4')
		document.body.querySelector('.why-img').classList.remove('col-md-8')
		document.body.querySelector('.why-img').style.display = 'none';
	}
}


const controlImgFlipper = () => {
	const thumbnails = document.body.querySelectorAll('.img-thumbnail');
	[].forEach.call(thumbnails, (thumbnail) => {
		thumbnail.addEventListener('click', e => {
			const mainImgRef = thumbnail.parentElement.getAttribute('mainImg');
			const mainImg = document.body.querySelector('#' + mainImgRef);
			const tempSrcStore = mainImg.src;
			mainImg.src = thumbnail.src;
			thumbnail.src = tempSrcStore;
		});
	});
}

const removeShakeOnSmallScreens = () => {
	if (window.innerWidth <= 481) {
		const classesToRemove = ['shake-slow', 'shake-freeze'];
		const shakableElements = document.body.querySelectorAll('.shake-slow');
		[].forEach.call( shakableElements, (element => element.classList.remove(...classesToRemove)) );
	}
}
