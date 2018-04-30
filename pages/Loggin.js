
    //Переписать на своем валидаторе

    var loginbtn = document.querySelector('#login');
    loginbtn.addEventListener('click' , onSubmit);
    
    function onSubmit(){
        let submit = document.querySelector('#login-submit-reg');
        submit.addEventListener('click', loggin);
    };

    function loggin(){
        var email = document.querySelector('#email');
        var name = localStorage.getItem(email.value);
        logg(name)
    };
    function logg(t){
        console.log(t);
    };

    
