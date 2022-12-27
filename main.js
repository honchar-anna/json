const FIRST_NAME = document.querySelector(".firstName");
const LAST_NAME = document.querySelector(".lastName");
const EMAIL = document.querySelector(".email");
const EMAIL_IN = document.querySelector(".email-in");
const PASS = document.querySelector(".pass");
const PASS_IN = document.querySelector(".pass-in");
const ADD = document.querySelector(".singUp");
const none = document.querySelector(".none");
const singIn = document.querySelector(".in");
const singUp = document.querySelector(".up");
const form1 = document.querySelector(".pleas-sing");
const form2 = document.querySelector(".please-in");
const SING_IN = document.getElementById("singIn");
const none1 = document.querySelector(".none1");
const none2 = document.querySelector(".none2");
const info = document.querySelector(".info");
const again = document.getElementById("ups");
const names = document.querySelector(".name");
const pofa = document.querySelector(".pofa");
const ema= document.querySelector(".ema");



/*
firstName:FIRST_NAME.value, 
lastName:LAST_NAME.value, 
email:EMAIL.value, 
password:PASS.value

*/
let allInfo = [];

let name = /^[a-zA-Z]{2,20}$/;
let email = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let password = /\w{8,15}/;

FIRST_NAME.onkeydown = function () {
  let testName = name.test(this.value);
  if (testName) {
    this.style.border = "1.5px solid green";
  } else {
    this.style.border = "1.25px solid red";
  }
};

LAST_NAME.onkeydown = function () {
  let testName = name.test(this.value);
  if (testName) {
    this.style.border = "1.5px solid green";
  } else {
    this.style.border = "1.25px solid red";
  }
};
EMAIL.onkeydown = function () {
  let testEmail = email.test(this.value);
  if (testEmail) {
    this.style.border = "1.5px solid green";
    ADD.disabled = false;
  } else {
    this.style.border = "1.25px solid red";
    ADD.disabled = true;
  }
};

PASS.onkeydown = function () {
  let testPass = password.test(this.value);
  if (testPass) {
    this.style.border = "1.5px solid green";
  } else {
    this.style.border = "1.25px solid red";
  }
};

ADD.addEventListener("click", function () {
  if (
    FIRST_NAME.value !== "" && LAST_NAME.value !== "" && EMAIL.value !== "" && PASS.value !== ""
  ) {
  

    if (localStorage.length >0  && localStorage.getItem('allInfo')) {
      allInfo = JSON.parse(localStorage.getItem("allInfo"));
    }
    if ( !allInfo.some((mass)=> mass.email.toLowerCase() === EMAIL.value.toLowerCase())){  
       allInfo.push({firstName:FIRST_NAME.value, 
        lastName:LAST_NAME.value, 
        email:EMAIL.value, 
        password:PASS.value});

        FIRST_NAME.value = "";
        FIRST_NAME.style.border = "1px solid lightgray";
      
        LAST_NAME.value = "";
        LAST_NAME.style.border = "1px solid lightgray";
        none.style.display='none'
        EMAIL.value = "";
        
        EMAIL.style.border = "1px solid lightgray";
      
        PASS.value = "";
        PASS.style.border = "1px solid lightgray";
    }
  
else{none.style.display='block'
EMAIL.value = "";

}
    localStorage.setItem("allInfo", JSON.stringify(allInfo));
   
   
  }

 
});

   singIn.addEventListener('click', function(){
form1.style.display='none';
form2.style.display='block';
   })

   singUp.addEventListener('click', function(){
    form1.style.display='block';
    form2.style.display='none';
       })

       again.addEventListener('click', function(){
        form1.style.display='block';
        form2.style.display='none';
        info.style.display='none';
           })

SING_IN.addEventListener('click', function(){
  if(EMAIL_IN.value!== '' && PASS_IN.value!== ''){
    if (localStorage.length > 0 && localStorage.getItem("allInfo")) {
      allInfo = JSON.parse(localStorage.getItem("allInfo"));
    }
      if(!allInfo.some((mass)=> mass.email.toLowerCase() === EMAIL_IN.value.toLowerCase() )){
        none1.style.display='block';
  none2.style.display='none';}
  else if(allInfo.some((mass)=> mass.email.toLowerCase() === EMAIL_IN.value.toLowerCase() && mass.password.toLowerCase() === PASS_IN.value.toLowerCase())){
 
   console.log('ok');
   form2.style.display='none';
   info.style.display='flex';

   const result = allInfo.filter((mass)=> mass.email.toLowerCase() === EMAIL_IN.value.toLowerCase());
   console.log(result);
   const fN = result[0].firstName;
   const lN = result[0].lastName;
   names.innerHTML = fN + " "+lN;
  ema.innerHTML = result[0].email;


      }
    
      else{ none2.style.display='block';
      none1.style.display='none';
    }
      localStorage.setItem("allInfo", JSON.stringify(allInfo));
}})
