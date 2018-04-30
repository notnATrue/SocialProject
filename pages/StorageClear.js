let clearBtn = document.querySelector('#clear-storage');
clearBtn.addEventListener('click',clearStorage);

function clearStorage(){
    storageIndex = 0;
    localStorage.clear();
    console.log(localStorage.length);
    // clearProfile();
};

// function clearProfile(){
//     let userProfileName = document.querySelector('#user-name');
//     userProfileName.innerHTML = "";
// }
