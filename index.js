const txtGroupsTglr = document.querySelectorAll(".txt-group-content img");

txtGroupsTglr.forEach(txtGroupsTglr => txtGroupsTglr.addEventListener('click', function(){
	const groupFields = Array.from(this.parentNode.children);
	groupFields[0].classList.toggle('show-active');
	groupFields[1].classList.toggle('show-rotate');
	groupFields[2].classList.toggle('show-answer');
}));