var actual_content;
const part_overlay = document.querySelector('#part-overlay')
const Intro = document.querySelector('#Intro');
const Dvpt = document.querySelector('#Dvpt');
const Conclu = document.querySelector('#Conclu');
const header = document.querySelector('.header');
const header_menu = document.querySelector('.header #main-menu');
const header_title = document.querySelector('.header #affichage-parties');

function setContent(content){
	console.log("Changing content to",content)
	actual_content = content;
	if(content == "Intro") {
		Intro.style.display = 'block';
		Dvpt.style.display = 'none';
		Conclu.style.display = 'none';
		part_overlay.style.left = '6.7%';
		localStorage.content = "Intro";
	}
	else if(content == "Dvpt") {
		Intro.style.display = 'none';
		Dvpt.style.display = 'block';
		Conclu.style.display = 'none';
		part_overlay.style.left = '39.6%';
		localStorage.content = "Dvpt";
	}
	else if(content == "Conclu") {
		Intro.style.display = 'none';
		Dvpt.style.display = 'none';
		Conclu.style.display = 'block';
		part_overlay.style.left = '72.5%';
		localStorage.content = "Conclu";
	};
};

function setTitle(title){
	console.log('Setting title to',title)
	if(title === 'DEFAULT'){
		header_menu.style.top = '0vh';
		header_title.style.top = '12vh';
	}else{
		header_title.innerHTML = title;
		header_menu.style.top = '-12vh';
		header_title.style.top = '0vh';
	}

};




const overlay = document.querySelector('.header #menu-overlay');
const nav_list = document.querySelectorAll('.header .menu');
const wrap = document.querySelector('#main_wrap');
const parties = document.querySelectorAll('#Dvpt section')

parties.forEach((list) => {
	list.addEventListener('mouseover', () => {
		setTitle(list.querySelector('.section-title').innerHTML);
	});
	list.addEventListener('mouseout', () => {
		setTitle('DEFAULT');
	});
});

console.log(nav_list);
nav_list.forEach((list) => {
	list.addEventListener('mouseover', () => {
		let position = list.getBoundingClientRect();
		overlay.classList.add('active');
		overlay.style.left = position.x + 'px';
		overlay.style.width = position.width + 'px';
	});
	list.addEventListener('mouseout', () => {
		overlay.classList.remove('active');
	});
});

if(localStorage.content){
	setContent(localStorage.content);
}else{
	setContent("Intro");
}