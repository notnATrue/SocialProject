
var registration = document.querySelector('#registration');
registration.addEventListener('click' , startValid);
 




 function startValid(){
    
    var loginform = document.getElementById('MyValidateForm');
    var array = Array.from(loginform.elements);
    
   
    var submit = document.getElementById('submit');
    submit.setAttribute('disabled', 'true');
    
    var box = document.getElementById('agree');
    box.addEventListener('change' , function(){
      if(forms.box.checked = true){
      forms.submit.disabled = false;
      } 
    });
    
    var forms = {
      name:array[0],
      pas1:array[1],
      pas2:array[2],
      box:array[3],
      submit:array[4],
      
      
      green: function(target){
        target.classList = "OK";
        return;
      },
      red: function(target){
        target.classList = "error";
        return;
      },
      defColor: function(){
       
        this.name.classList = "";
        this.pas1.classList = "";
        this.pas2.classList = "";
      }
    };

    function setdefault(){
      forms.submit.disabled = true;
      forms.box.checked = false;
      forms.name.value = "";
      forms.pas1.value = "";
      forms.pas2.value = "";
    }

  var validation = function(e){
    e.preventDefault();
    emptyForms();
        
    function emptyForms(){
      forms.defColor();
      if(forms.name.value === "" || forms.pas1.value === "" || forms.pas2.value === ""){
        array.forEach(function(x){
          if(x.value===""&& x!== submit){
            forms.red(x);
          }
        });
      declineLogin("Declined : Empty forms are not allowed");
      } else {
        passwordCheck();
        }
    }
  
    function passwordCheck(){
      forms.defColor();
        if (forms.pas1.value !== forms.pas2.value){
          declineLogin('Declined : Password not matches');
          forms.red(forms.pas1);
          forms.red(forms.pas2);
          } else {
          forms.green(forms.pas1);
          forms.green(forms.pas2);
          forms.green(forms.name);
          loggedIn();
        }
    }
    
    function declineLogin(e){
      console.error(e);
    } 
    function loggedIn(){
        createUser();
      console.log('Welcome ' + forms.name.value);
    }
    setdefault();
    // random();
    }
    submit.addEventListener('click' , validation);
    
    function createUser(){
        localStorage.setItem('e-mail', forms.name.value);
        localStorage.setItem('pass' , forms.pas1.value);
        logg(localStorage);
    }
  }