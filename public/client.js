$("#loginButton").click(function() {
    var login = $("[name='login']").val();
    var password = $("[name='password']").val();

    $.ajax({
        url: "/login",
        method: "POST",
        data: {
            "login": login,
            "password": password
        },
    }).then(function(res) {
        console.log(res);
        
        // Handle response here
    })
});