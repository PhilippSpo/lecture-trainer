Template.questionList.events({
	'click #backButton': function () {
		Bender.go('/', {}, { animation: 'slideRight' });
	}
});