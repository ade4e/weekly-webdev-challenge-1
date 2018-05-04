var validatorRegister = new FormValidator('registerForm', [{
    name: 'username',
    display: 'Username',
    rules: 'required'
}, {
    name: 'password',
    display: 'password',
    rules: 'required|matches[password]|min_length[6]'
}, {
    name: 'confirm',
    display: 'password confirmation',
    rules: 'required|matches[password]'
}, {
    name: 'email',
    rules: 'required|valid_email'
}, {
    name: 'city',
    display: 'city',
    rules: 'required'
}, {
    name: 'checkbox',
    display: 'Terms of use',
    rules: 'required'

}], function (errors, event) {
    if (errors.length > 0) {
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
            errorString = errors[i].message;

        }
        document.getElementById('errors').innerHTML = errorString;
        $('#errors').fadeIn("slow");
    }
});

var validatorMail = new FormValidator('mailForm', [{
    name: 'username',
    display: 'Username',
    rules: 'required'
},
{
    name: 'email',
    display: 'e-mail',
    rules: 'required|valid_email'
},
{
    name: 'message',
    display: 'Message',
    rules: 'required'


},
{
    name: 'checkbox',
    display: 'Terms of use',
    rules: 'required'

}], function (errors, event) {
    if (errors.length > 0) {
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
            errorString = errors[i].message;

        }
        document.getElementById('errorsMail').innerHTML = errorString;
        $('#errorsMail').fadeIn("slow");
    }
});
var validatorSign = new FormValidator('signIn', [{
    name: 'Username',
    display: 'Username',
    rules: 'required'
},
{
    name: 'password',
    display: 'password',
    rules: 'required|min_length[6]'
},
{
    name: 'checkbox',
    display: 'Terms of use'


}], function (errors, event) {
    if (errors.length > 0) {
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
            errorString = errors[i].message;

        }
        document.getElementById('errorsSign').innerHTML = errorString;
        $('#errorsSign').fadeIn("slow");
    }
});
var validatorRecover = new FormValidator('recoverForm', [{
    name: 'email',
    display: 'e-mail',
    rules: 'required'
},
{
    name: 'phone',
    display: 'Phone',
    rules: 'required|min_length[6]|numeric'
}
], function (errors, event) {
    if (errors.length > 0) {
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
            errorString = errors[i].message;

        }
        document.getElementById('errorsRecover').innerHTML = errorString;
        $('#errorsRecover').fadeIn("slow");
    }
});
var validatorRecover = new FormValidator('subscribe', [{
    name: 'email',
    display: 'e-mail',
    rules: 'required'
}

], function (errors, event) {
    if (errors.length > 0) {
        var errorString = '';
        for (var i = 0; i < errors.length; i++) {
            errorString = errors[i].message;

        }
        document.getElementById('errorsSubscribe').innerHTML = errorString;
        $('#errorsSubscribe').fadeIn("slow");
    }
});
