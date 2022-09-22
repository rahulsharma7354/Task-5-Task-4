var elem =  document.getElementsByClassName('second-button');
for( var  i = 0 ; i< elem.length ; i++){
  elem[i].addEventListener('click' , function() {
          document.getElementById("myform").reset();
  })
}
var ele =  document.getElementsByClassName('male');
for( var  i = 0 ; i< ele.length ; i++){
  ele[i].addEventListener('click' , function() {
          alert("Hello sir");
  })
}
var ele =  document.getElementsByClassName('female');
for( var  i = 0 ; i< ele.length ; i++){
  ele[i].addEventListener('click' , function() {
          alert("Hello Lady");
  })
}
function clearErrors(){
  errors = document.getElementsByClassName('formerror');
  for(let item of errors){
    item.innerHTML = "";
  }
}
function seterror(id , error){
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
  var returnval = true;
  clearErrors();
  var name =document.forms['myForm']["fname"].value;
  if(name.length==0){
    seterror("name" , "*Required Feild")
  }
}

