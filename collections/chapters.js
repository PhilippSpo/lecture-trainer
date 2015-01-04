Chapters = new Mongo.Collection('chapters');

Chapters.allow({
	insert: function (userId, doc) {
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		return true;
	},
	remove: function (userId, doc) {
		return true;
	}
});

if(Meteor.isServer){
	Meteor.publish('chapters', function() {
		return Chapters.find();
	});
}