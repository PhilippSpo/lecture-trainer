Template.answer.events({
	'click #correct': function() {
		//next question
		Bender.go('chapterQuestions', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeOut'
		});
	},
	'click #wrong': function() {
		//next question
		Bender.go('chapterQuestions', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeOut'
		});
	}
});