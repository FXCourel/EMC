var actual_content;
const html = document.querySelector('#page')
const part_overlay = document.querySelector('#part-overlay')
const Intro = document.querySelector('#Intro');
const Dvpt = document.querySelector('#Dvpt');
const Conclu = document.querySelector('#Conclu');
const header = document.querySelector('.header');
const header_menu = document.querySelector('.header #main-menu');
const header_title = document.querySelector('.header #affichage-parties');
const triggeron = document.querySelector('#trigger-on');
const triggeroff = document.querySelector('#trigger-off');
const overlay = document.querySelector('.header #menu-overlay');
const nav_list = document.querySelectorAll('.header .menu');
const wrap = document.querySelector('#main_wrap');
const parties = document.querySelectorAll('#Dvpt section');
const themeBtn = document.querySelector('#themeBtn');
const climbBtn = document.querySelector('#climbBtn');
const fixed = header.clientHeight;

function setContent(content){
	window.scrollTo(0,0);
	if(actual_content === content){
		return false;
	}	
	actual_content = content;
	if(content == "Intro") {
		Intro.style.display = 'block';
		Dvpt.style.display = 'none';
		Conclu.style.display = 'none';
		part_overlay.style.left = '6.7%';
		localStorage.content = "Intro";
		return false;
	}
	else if(content == "Dvpt") {
		Intro.style.display = 'none';
		Dvpt.style.display = 'block';
		Conclu.style.display = 'none';
		part_overlay.style.left = '39.6%';
		localStorage.content = "Dvpt";
		return false;
	}
	else if(content == "Conclu") {
		Intro.style.display = 'none';
		Dvpt.style.display = 'none';
		Conclu.style.display = 'block';
		part_overlay.style.left = '72.5%';
		localStorage.content = "Conclu";
		return false;
	};
};


triggeron.addEventListener('mouseover', () => {
	if (localStorage.content === "Dvpt" || localStorage.content === "Conclu") {
		header.style.top = '0';
		part_overlay.style.top = '12vh';
	};
});
triggeroff.addEventListener('mouseover', () => {
	if ((localStorage.content === "Dvpt" || localStorage.content === "Conclu") && window.pageYOffset >= fixed) {
		header.style.top = 'calc(-12vh - 1px)';
		part_overlay.style.top = '-1px';
	};
});


function reloadMenu(){
	if ((localStorage.content === "Dvpt" || localStorage.content === "Conclu") && window.pageYOffset >= fixed) {
		header.style.top = 'calc(-12vh - 1px)';
		part_overlay.style.top = '-1px';
	} else {
		header.style.top = '0';
		part_overlay.style.top = '12vh'
	};
	if (window.pageYOffset == 0){
		climbBtn.style.right = '-52px';
		themeBtn.style.borderRadius = '10px 0 0 0';
	} else {
		climbBtn.style.right = '0px';
		themeBtn.style.borderRadius = '0 0 0 0';
	}
	
}

function setTheme(mode){
	if (mode === 'toggle'){
		if (localStorage.theme === 'Dark'){
			localStorage.theme = 'Light';
			html.classList.remove('dark');
			html.classList.add('light');
		} else {
			localStorage.theme = 'Dark';
			html.classList.remove('light');
			html.classList.add('dark');
		}
	} else if (mode === 'Dark'){
		localStorage.theme = 'Dark';
		html.classList.remove('light');
		html.classList.add('dark');
	} else if (mode === 'Light'){
		localStorage.theme = 'Light';
		html.classList.remove('dark');
		html.classList.add('light');
	};
}

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

if(localStorage.theme){
	setTheme(localStorage.theme);
}else{
	setTheme('Dark');
}

reloadMenu();