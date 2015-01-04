Template.newQuestion.rendered = function() {
	$('#questionNote').summernote();
	$('#answerNote').summernote();
};

Template.newQuestion.events({
	'click #commitQuestion': function() {
		var question = $('#question').val();
		var answer = $('#answerNote').code();
		Questions.insert({
			chapterId: this.chapter._id,
			question: question,
			answer: answer
		});
		backToQuestionsList.call(this);
	},
	'click #backButton': function(e) {
		e.preventDefault();
		backToQuestionsList.call(this);
	}
});

function backToQuestionsList () {
	$('#questionNote').destroy();
	$('#answerNote').destroy();
	Bender.go('chapterQuestions', {
		chapterId: this.chapter._id
	}, {
		animation: 'fadeOut'
	});
}