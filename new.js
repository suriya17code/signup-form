const container = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");
const inputEmail = document.getElementById("email");
const useremail = document.getElementById("useremail");
const submitbtn = document.getElementById("submitbtn");
const success = document.getElementById("success");
const dismissmessage = document.getElementById("Dismiss-message");



submitbtn.addEventListener('click',(e)=>{
e.preventDefault();
const email=inputEmail.value.trim();

if(email === ''){
showError(inputEmail,"enter a email");

}else if(!isValiedEmail(email)){
  showError(inputEmail,'enter a valied email');
  }
  else{
    successform();
    clearerror(inputEmail);
    useremail.innerHTML=email;
    inputEmail.value='';

  }
})
function isValiedEmail(email){
const rule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return rule.test(email);
}

function showError(element,message){
  const parent = element.parentElement;
  const seterror = parent.querySelector("#err-mail");
  seterror.innerHTML=message;
  element.classList.add("input-error");
  

}
function  clearerror(element){
  const parent = element.parentElement;
  const seterror = parent.querySelector("#err-mail");
  seterror.innerHTML='';
  inputEmail.classList.remove("input-error");
}
function successform(){
  left.style.display='none';
  right.style.display='none';
  success.style.display='block';
  container.style.backgroundColor='#36384e';
}
dismissmessage.addEventListener('click',()=>{
  left.style.display='block';
  right.style.display='block';
  success.style.display='none';
  container.style.backgroundColor='white';
})










