var button =  document.getElementsByClassName('second-button');
for( var  i = 0 ; i< button.length ; i++){
  button[i].addEventListener('click' , function() {
          document.getElementById("myform").reset();
          location.reload(); 
  })
}

var gender = document.getElementsByClassName("male");
for(var i=0 ; i< gender . length ; i++){
  gender[i].addEventListener('click' , function () {
    var k = document.querySelector('input[name="male"]:checked').value;
    alert(k)
  })
}



function validateForm(){
  var res = true;
  var name = document.getElementById("name").value;
  if(name.length==0){
    document.getElementsByClassName("input-text-name")[0].style.borderColor = "red";
    document.getElementsByClassName("star")[0].style.visibility="hidden"
    document.getElementsByClassName("formerror")[0].style.visibility = "visible";
    res=false;
  }
  var email = document.getElementById("email").value;
  if(email.length==0){
    document.getElementsByClassName("input-text-email")[0].style.borderColor = "red";
    document.getElementsByClassName("star")[1].style.visibility="hidden"
    document.getElementsByClassName("formerror")[1].style.visibility = "visible";
    res=false;
  }
  var org = document.getElementById("orgName").value;
  if(org.length==0){
    document.getElementsByClassName("input-text-phone")[1].style.borderColor = "red";
    document.getElementsByClassName("star")[2].style.visibility="hidden"
    document.getElementsByClassName("formerror")[3].style.visibility = "visible";
    res=false;
  }
  if (res==false){
    document.getElementsByClassName("error-show")[0].style.visibility = "visible";
  }
  if (res==true) {
     alert("Form Submitted");
  } else {
    return res;
  }
   
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
            error[i].innerHTML="";
          }
  })
}
