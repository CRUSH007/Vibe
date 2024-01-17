function btnQuestion() {
	const btnQAr = document.querySelectorAll('.question__item');
    btnQAr.forEach(function(item){
        item.addEventListener('click', function(){
            const answer = this.querySelector('.answer');
            const arrow = this.querySelector('.arrow__btn');
            arrow.classList.toggle('rotate');
            answer.classList.toggle('open');
        })
    });
}

export default btnQuestion;