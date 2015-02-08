Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
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
	waitOn: function() {
		return [Meteor.subscribe('chapters', this.params.chapterId), Meteor.subscribe('questions', this.params.chapterId)];
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

Router.route('/:chapterId/newQuestion', {
	name: 'newQuestion',
	waitOn: function() {
		return [Meteor.subscribe('chapters', this.params.chapterId), Meteor.subscribe('questions', this.params.chapterId)];
	},
	action: function() {
		this.render('newQuestion');
	},
	data: function() {
		return {
			chapter: Chapters.findOne({_id: this.params.chapterId})
		};
	}
});

Router.route('/:chapterId/:questionId', {
	name: 'questionDetail',
	waitOn: function() {
		return [Meteor.subscribe('chapters', this.params.chapterId), Meteor.subscribe('questions', this.params.chapterId)];
	},
	action: function() {
		if(this.params.query.show !== 'answer'){
			this.render('question');
		}else{
			this.render('answer');
		}
	},
	data: function() {
		return {
			chapter: Chapters.findOne({_id: this.params.chapterId}),
			question: Questions.findOne({_id: this.params.questionId})
		};
	}
});