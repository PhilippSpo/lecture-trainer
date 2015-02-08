Template.newQuestion.rendered = function() {
	$('#questionNote').summernote();
	$('#answerNote').summernote();
};

Template.newQuestion.events({
	'click #commitQuestion': function() {
		var question = $('#question').val();
		var answer = $('#answerNote').code();
		var counter = Questions.find({chapterId: this.chapter._id}).count();
		console.log(counter);
		Questions.insert({
			chapterId: this.chapter._id,
			question: question,
			answer: answer,
			number: counter+1,
			status: 0
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