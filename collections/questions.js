Questions = new Mongo.Collection('questions');

Questions.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return false;
	}
});

if(Meteor.isServer){
	Questions._ensureIndex({ 'chapterId': 1});

	Meteor.publish('questions', function(chapterId) {
		if(chapterId){
			return Questions.find({chapterId: chapterId});
		}
		return Questions.find();
	});
}