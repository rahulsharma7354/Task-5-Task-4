var button =  document.getElementsByClassName('second-button');
for( var  i = 0 ; i< button.length ; i++){
  button[i].addEventListener('click' , function() {
          document.getElementById("myform").reset();
          document.getElementsByClassName("formerror")[i].innerHTML=" ";
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
  var k = document.getElementById("name").value;
  if(k.length==0){
    document.getElementsByClassName("formerror")[0].innerHTML=" *Name is required";
    res=false;
  }
  var k = document.getElementById("email").value;
  if(k.length==0){
    document.getElementsByClassName("formerror")[1].innerHTML=" *Email is required";
    res=false;
  }
  var k = document.getElementById("orgName").value;
  if(k.length==0){
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