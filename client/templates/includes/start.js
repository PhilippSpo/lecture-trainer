Template.start.events({
    "click .btn-primary": function (e) {
        e.preventDefault();
        if(e.currentTarget.id == "loginRoute"){
            Router.go("login");
        }else{
            Router.go("register");
        }
    }
})