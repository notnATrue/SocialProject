window.onload = function(){
    
};
    var storageIndex = 0;

    var loginbtn = document.querySelector('#login');
    loginbtn.addEventListener('click' , onSubmit);
    
    function onSubmit(){
        let submit = document.querySelector('#login-submit-reg');
        submit.addEventListener('click', loggin);
    };

    function loggin(){
        var email = document.querySelector('#email');
        if(email.value !=="" && email.value!==null && email.value!==undefined){
            storageIndex++;
            localStorage.setItem('e-mail'+storageIndex, email.value);
            logg(localStorage);
            logg(storageIndex);
        };
    };
    function logg(t){
        console.log(t);
    };

    
