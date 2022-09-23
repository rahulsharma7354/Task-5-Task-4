var button =  document.getElementsByClassName('second-button');
for( var  i = 0 ; i< button.length ; i++){
  button[i].addEventListener('click' , function() {
          document.getElementById("myform").reset();
          location.reload(); 
  })
}

var gender =  document.getElementsByClassName('male');
for( var  i = 0 ; i< gender.length ; i++){
  gender[i].addEventListener('click' , function() {
          alert("Hello sir");
  })
}
var gender =  document.getElementsByClassName('female');
for( var  i = 0 ; i< gender.length ; i++){
  gender[i].addEventListener('click' , function() {
          alert("Hello Lady");
  })
}

function validateForm(){
  var res = true;
  var name = document.getElementById("name").value;
  if(name.length==0){
    document.getElementsByClassName("formerror")[0].innerHTML=" *Name is required";
    res=false;
  }
  if(name.length>0){
    document.getElementsByClassName("formerror")[0].innerHTML=" *";
    res=true;
  }

  var email = document.getElementById("email").value;
  if(email.length==0){
    document.getElementsByClassName("formerror")[1].innerHTML=" *Email is required";
    res=false;
  }
  if(email.length>0){
    document.getElementsByClassName("formerror")[1].innerHTML=" *";
    res=true;
  }
  var org = document.getElementById("orgName").value;
  if(org.length>0){
    document.getElementsByClassName("formerror")[3].innerHTML=" *";
    res=true;
  }
  if(org.length==0){
    document.getElementsByClassName("formerror")[3].innerHTML=" *Organization required";
    res=false;
  }
  if (res==false){
    document.getElementsByClassName("error-show")[0].innerHTML="Please fill all the required fields below";
  }
  return res;
  
  }
function setPromotion(value) {
  if (value != 'select') {
      document.getElementById("promotion").value = value + " - PROMO";
  }
  else {
      document.getElementById("promotion").value = "";
  }
}

var button =  document.getElementsByClassName('second-button');
for( var  i = 0 ; i< button.length ; i++){
  button[i].addEventListener('click' , function() {
          var error = document.getElementsByClassName("formerror");
          for(var i=0 ; i<error.length ; i++){
            error[i].innerHTML=" ";
          }
  })
}