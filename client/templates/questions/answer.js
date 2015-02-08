Template.answer.events({
	'click #correct': function() {
		if (this.question.status !== 2) {
			Questions.update({
				_id: this.question._id
			}, {
				$inc: {
					status: 1
				}
			});
		}
		nextQuestion.call(this);
	},
	'click #wrong': function() {
		if (this.question.status > 0) {
			Questions.update({
				_id: this.question._id
			}, {
				$inc: {
					status: -1
				}
			});
		}
		nextQuestion.call(this);
	}
});

function nextQuestion() {
	var next = Questions.findOne({chapterId: this.question.chapterId, number: this.question.number+1});
	if(next){
		// go to next question
		Bender.go('questionDetail', {
			chapterId: this.chapter._id,
			questionId: next._id
		}, {
			animation: 'fadeIn',
			query: 'show=question'
		});
	}else{
		// go to overview
		Bender.go('chapterQuestions', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeOut'
		});
	}
}