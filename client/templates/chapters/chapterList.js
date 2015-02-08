Template.chapterList.events({
	'submit form': function (event) {
		event.preventDefault();
		var chapterTitle = event.target.chaptertitle.value;
		Chapters.insert({title: chapterTitle});
	},
	'click .list-group-item': function() {
		Bender.go('chapterQuestions', {
			chapterId: this._id
		}, { animation: 'slideLeft' });
	}
});

Template.chapterList.helpers({
	numberOfQuestions: function () {
		return Questions.find({chapterId: this._id}).count();
	},
	numberOfCorrectQuestions: function () {
		return Questions.find({chapterId: this._id, status: 2}).count();
	}
});