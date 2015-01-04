Template.question.events({
	'click #showAnswer': function() {
		Bender.go('questionDetail', {
			chapterId: this.chapter._id,
			questionId: this.question._id
		}, {
			animation: 'fadeIn',
			query: 'show=answer'
		});
	}
});