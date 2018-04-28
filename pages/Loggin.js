window.onload = function(){
    var slider = document.querySelector(".card.mb-3.fixed-bottom.bg-dark");
    
    var loginbtn = document.querySelector('.btn.btn-outline-primary');
    loginbtn.addEventListener('click' , loggin);

    var signbtn = document.querySelector('#submitlog');
    signbtn.addEventListener('click', loggin);
    //
    var inout = document.querySelector('.input');
    console.log()
    function loggin(event){
        logg(event.target);
    };

    function logg(t){
        console.log(t);
    };
};

