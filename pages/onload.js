window.onload = function(){

    
    if(localStorage!==null){
        
        let userDataName = document.getElementById('user-name-head')
        userDataName.innerText = localStorage.getItem('e-mail');
        logg(userDataName)
        
    }
    
}