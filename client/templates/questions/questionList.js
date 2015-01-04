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
	}
});