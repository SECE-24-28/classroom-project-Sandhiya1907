function func(){
    let x=(document.getElementById('1').value);
    let y=Number(document.getElementById('2').value);
    let name={
        "username":"Sanjay",
        "password":"1234"
    }
    if(x==name.username && y==name.password){
        alert("login Successful");
      window.location.href = "home.html"
    }
    else{
        alert("login failed");
    }
   }
   function func1(){
      let x=Number(document.getElementById('1').value);
    let y=Number(document.getElementById('2').value);
    let z=document.getElementById('3').value;
    if(z=='+'){
        console.log("The result is "+(x+y));
    }
    else if(z=='-'){
        console.log("The result is "+(x-y));
    }
    else if(z=='*'){
        console.log("The result is "+(x*y));
    }
    else if(z=='/'){
        console.log("The result is "+(x/y));
    }
    else if(z=='%'){
        console.log("The result is "+(x%y));
    }
    else{
         alert("Invalid input...Please enter the appropriate values in the specific column");
    }
   }