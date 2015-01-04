Template.questionList.events({
	'click #backButton': function(e) {
		e.preventDefault();
		Bender.go('/', {}, {
			animation: 'slideRight'
		});
	},
	'click #newQuestion': function() {
		Bender.go('newQuestion', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeIn'
		});
	},
	'click .question-item': function() {
		var template = Template.instance();
		Bender.go('questionDetail', {
			chapterId: template.data.chapter._id,
			questionId: this._id
		}, {
			animation: 'fadeIn',
			query: 'show=question'
		});
	}
});