
export default async function validate() {
  let credentials = {
    username: "Admin",
    password: "1234",
  };
  let userdata = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    rememberme:document.getElementById('remember').checked
  };
  /*if (
    credentials.username == userdata.username &&
    credentials.password == userdata.password
  ) {
    alert("Login successfull");
  } else {
    alert("LOGIN FAILED..RECHECK THE LOGIN CREDENTIALS.");
  }*/
 let userpromise=new Promise(
    function(resolve,reject){
        if(credentials.username==userdata.username && credentials.password==userdata.password){
              resolve('login successful')
        }
        else{
            reject('login failed...Enter the correct credentials..!!');
        }
    });
    //     userpromise.then(function(successmessage){
    //         alert(successmessage)
    //     })
    //     .catch(function(failedmessage){
    //         alert(failedmessage)
    //     })
    // }
   try{
  let successmessage = await userpromise;
  alert(successmessage);
   }
   catch(failedmessage){
    alert(failedmessage);
   }
if(userdata.rememberme){
  localStorage.setItem('username',userdata.username);
   localStorage.setItem('password',userdata.password);
   console.log("password stored in localstorage");
}
else{
sessionStorage.setItem('username',userdata.username);
   sessionStorage.setItem('password',userdata.password);
   console.log("password stored in session");
}
}