function btnQuestion() {
	const question = document.querySelectorAll('.question__item');
    const answers = document.querySelectorAll('.answer');
    question.forEach(function(item){
        item.addEventListener('click', function(){
            answers.forEach(function(item){
                document.querySelectorAll('.arrow__btn').forEach(function(item){
                    item.classList.remove('rotate');
                })
                item.classList.remove('open');
            });
            const answer = this.querySelector('.answer');
            const arrow = this.querySelector('.arrow__btn');
            arrow.classList.toggle('rotate');
            answer.classList.toggle('open');
        })
    });
}

export default btnQuestion;