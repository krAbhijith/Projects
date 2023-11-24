function login(){
    document.querySelector('.login-wrapper').style.display="flex"
}
function closeLogin(){
    document.querySelector('.login-wrapper').style.display="none"
}
function menuToggle(state) {
    if(state == 0){
        document.querySelector('.menu-btn').style.display = "none"
        document.querySelector('.close-btn').style.display = "flex"
        document.querySelector('.menu-list').style.display = "block"
    }else if(state == 1){
        document.querySelector('.menu-btn').style.display = "flex"
        document.querySelector('.close-btn').style.display = "none"
        document.querySelector('.menu-list').style.display = "none"
    }
}
function store(){
    var username=document.querySelector('.usr').value
    var password=document.querySelector('.pwd').value
    if(username=="aami"){    
    }
    else {
        alert("Username is Wrong")
    }
    if(password=="nihal"){
    }
    else{
        alert("password is Wrong")
    }
}
function signup(){
    document.querySelector('.signup-wrapper').style.display="flex"
}
function closesignup(){
    document.querySelector('.signup-wrapper').style.display="none"
}
function store2(){
    var username=document.querySelector('.usr1').value
    var password=document.querySelector('.pwd1').value
    var confirmpassword=document.querySelector('.pwd2').value
    username==""
        if(password==confirmpassword){
            alert("pasword is correct")
          }else{
            alert("paswword Dont Match ")
        }
    }
