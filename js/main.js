function setContent(content){
    console.log("Changing content to",content)
    return
}

const overlay = document.querySelector('.header #menu-overlay');
const nav_list = document.querySelectorAll('.header .menu');

console.log(nav_list);
nav_list.forEach((list) => {
	list.addEventListener('mouseover', () => {
		let position = list.getBoundingClientRect();
		overlay.classList.add('active');
		overlay.style.left = position.x + 'px';
		overlay.style.top = position.y + 'px';
		overlay.style.height = position.height + 'px';
		overlay.style.width = position.width + 'px';
	});
	list.addEventListener('mouseout', () => {
		overlay.classList.remove('active');
	});
});
