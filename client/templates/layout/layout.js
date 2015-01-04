Template.layout.rendered = function () {
    Bender.initialize(this.find('#content-container'));
};
Template.layout.helpers({
    currentUser: function () {
        var userid = Meteor.userId()
        if (userid) {
            return Meteor.users.findOne({"_id":userid}).username;
        }
    }
});