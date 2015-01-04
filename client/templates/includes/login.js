Template.login.events({
    "click .btn-primary": function (e) {
        e.preventDefault();
        if (e.currentTarget.id == "backToStart") {
            Router.go("start");
        } else if (e.currentTarget.id == "loginSubmit") {
            var postProperties = {
                email: $('.form-signin').find('[name=email]').val(),
                password: $('.form-signin').find('[name=password]').val()
            }

            Meteor.loginWithPassword(postProperties.email, postProperties.password, function (error) {
                if(error){
                    throwError("User does not exist or password is wrong!");
                }
            });
        }
    }
})