Template.question.events({
	'click #showAnswer': function() {
		Bender.go('questionDetail', {
			chapterId: this.chapter._id,
			questionId: this.question._id
		}, {
			animation: 'fadeIn',
			query: 'show=answer'
		});
	},
	'click #goPrev': function() {
		Bender.go('questionDetail', {
			chapterId: this.chapter._id,
			questionId: Session.get('prevQuestionId')
		}, {
			animation: 'fadeIn',
			query: 'show=question'
		});
	},
	'click #goNext': function() {
		Bender.go('questionDetail', {
			chapterId: this.chapter._id,
			questionId: Session.get('nextQuestionId')
		}, {
			animation: 'fadeIn',
			query: 'show=question'
		});
	},
	'click #questionList': function() {
		Bender.go('chapterQuestions', {
			chapterId: this.chapter._id
		}, {
			animation: 'fadeOut'
		});
	}
});

Template.question.helpers({
	hasPrev: function () {
		var prev = Questions.findOne({chapterId: this.question.chapterId, number: this.question.number-1});
		if(prev){
			Session.set('prevQuestionId', prev._id);
		}
		return prev;
	},
	hasNext: function () {
		var next = Questions.findOne({chapterId: this.question.chapterId, number: this.question.number+1});
		if(next){
			Session.set('nextQuestionId', next._id);
		}
		return next;
	}
});