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