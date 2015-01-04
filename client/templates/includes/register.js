Template.register.events({
    "click .btn-primary": function (e) {
        e.preventDefault();
        if (e.currentTarget.id == "backToStart") {
            Router.go("/start");
        } else if (e.currentTarget.id = "submitRegistration") {
            var postProperties = {
                email: $('.form-signin').find('[name=email]').val(),
                password: $('.form-signin').find('[name=password]').val(),
                repeatPassword: $('.form-signin').find('[name=repeatPassword]').val(),
                name: $('.form-signin').find('[name=name]').val(),
                firstname: $('.form-signin').find('[name=firstname]').val()
            };
            var options = {
                username: postProperties.email,
                email: postProperties.email,
                password: postProperties.password,
                profile: {
                    first_name: postProperties.firstname,
                    last_name: postProperties.name
                }
            };
            if (postProperties.password == postProperties.repeatPassword) {
                Accounts.createUser(options,function(error){
                    if(error){
                        throwError(":-( Please contact an admin.");
                    }
                });
            } else {
                throwError("Passwords do not match!");
            }
        }
    }
})