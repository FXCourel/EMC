var actual_content;
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
const fixed = header.clientHeight;

function setContent(content){
	window.scrollTo(0,0);
	if(actual_content === content){
		return false;
	}	
	console.log("Changing content to",content)
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

reloadMenu();