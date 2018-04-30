
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
      if(x.value===""&&x!=forms.submit ){
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
  document.cookie = "username"+forms.name.value+';';
  document.cookie = "token="+forms.pas1.value+'['+forms.pas1.value+']';
  localStorage.setItem('e-mail', encodeURIComponent(forms.name.value));
  localStorage.setItem('pass' , encodeURIComponent(forms.pas1.value));
  logg(localStorage);
  logg(document.cookie);

  //
  let userDataName = document.getElementById('user-name-head')
        userDataName.innerText = localStorage.getItem('e-mail');
        logg(userDataName)
  
};


// var loginform = document.getElementById('MyValidateForm');
// let inputName = document.getElementById('user-name');
// let inputPass1 = document.getElementById('user-pas1');
// let inputPass2 = document.getElementById('user-pas2');
// var box = document.getElementById('agree');
//     box.addEventListener('change' , function(){
//       if(box.checked = true){
//         submit.disabled = false;
//       }
//     });

// var submit = document.getElementById('submit');
// submit.setAttribute('disabled', 'true');
// submit.addEventListener('click' , emptyInput);

// function data(name , pas1 , pas2){
//     this.name = name;
//     this.pas1 = pas1;
//     this.pas2 = pas2;
//     };
// function emptyInput(){
//     let Data = new data();
//     Data.name = inputName.value;
//     Data.pas1 = inputPass1.value;
//     Data.pas2 = inputPass2.value;
//     logg((Data));
//     var x = 0;
//     if(Data.name === "" || Data.pas1 === "" || Data.pas2 === ""){
//       Object.defineProperty(Data , "name1" , function(){
//         set: this.Object.name1 = name1;
        
//       });
    
//     } else {
//       passwordMatches();
//     }

//     function passwordMatches(){
//       if(Data.pas1 !== Data.pas2){
//         console.log('error on password');
//       }
//     }
//   }

//   function error(t){
//     t.className = "error";
//   }
