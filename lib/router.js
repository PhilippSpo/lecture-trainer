Router.route('/', {
	layoutTemplate: 'layout',
	waitOn: function() {
		return [Meteor.subscribe('chapters'), Meteor.subscribe('questions')];
	},
	action: function() {
		this.render('chapterList');
	},
	data: function() {
		return {
			chapters: Chapters.find()
		};
	}
});

Router.route('/:chapterId/', {
	name: 'chapterQuestions',
	layoutTemplate: 'layout',
	waitOn: function() {
		return [Meteor.subscribe('chapters'), Meteor.subscribe('questions', this.params.chapterId)];
	},
	action: function() {
		this.render('questionList');
	},
	data: function() {
		return {
			chapter: Chapters.findOne({_id: this.params.chapterId}),
			questions: Questions.find()
		};
	}
});