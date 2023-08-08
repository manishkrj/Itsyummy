var database = 
[
    {
        username:"Manish",
        password:"123"
    },
    {
        username:"Aniket",
        password:"123"
    },
    {
        username:"Rahul",
        password:"123"
    }
]

var userid=document.getElementById("id")
var userpassword=document.getElementById("password")
var button=document.getElementById("logIn")

var h1=document.querySelector("h1")
var mode=document.querySelector(".mode")
var body=document.querySelector("body")
var box_color=document.querySelectorAll(".box_color_align")
var line=document.querySelector(".line")

var sign_button=document.querySelector(".sign_up")
var sign_up=document.querySelector(".sign_up_bg")
var cut=document.querySelector(".cut")

var addData=document.querySelector(".addData")
var req=document.querySelectorAll(".req")
var newpass=document.getElementById("newpass")

var sign_p=document.querySelector(".sign_p")
var wrongid=document.querySelector(".wrongid")
var inputid=document.querySelector(".inputid")
var fillall=document.querySelector(".fillall")
var exist=document.querySelector(".alext")

var dark=false

function validUser(username)
{
    var flag=false
    database.forEach
    (
        function(i)
        {
            if(i.username===username)
            flag=true
        }
    )
    return flag;
}
function isUser(username,password)
{
    var flag=false
    database.forEach
    (
        function(i)
        {
            if(i.username===username && i.password===password)
            flag=true
        }
    )
    return flag
}


function log_in(username,password)
{
    if(!validUser(username))
    {
        sign_p.style.display="inline"
        wrongid.style.display="none"
    }
    else if(!isUser(username,password))
    {
        sign_p.style.display="none"
        wrongid.style.display="inline"
    }
    else
    window.location.href = "https://manishkrj.github.io/yummy/";
    inputid.style.display="none"
}




function setMode()
{
    if(dark)
    {
        body.style.backgroundColor="#F0F2F5"
        h1.style.color="#1d2129"
        mode.style.backgroundColor="#1d2129"
        box_color.forEach
        (
            (e)=>{
            e.style.backgroundColor="#FFFFFF";
            }
        )
        line.style.borderColor="#dadde1"
        sign_up.style.backgroundColor="rgba(255, 255, 255, .8)"
        cut.style.backgroundColor="#c1c1c1"
        dark=false
    }
    else
    {
        body.style.backgroundColor="#1d2129"
        h1.style.color="#F0F2F5"
        mode.style.backgroundColor="#F0F2F5"
        box_color.forEach((e)=>{
            e.style.backgroundColor="#F0F2F5";
        })
        line.style.borderColor="#1d2129"
        sign_up.style.backgroundColor="rgba(0, 0, 0, .8)"
        cut.style.backgroundColor="#1d2129"
        dark=true
    }
    inputid.style.display="none"
    sign_p.style.display="none"
    wrongid.style.display="none"
}
function inputLength()
{

    return (userid.value.length>0) && (userpassword.value.length>0);
}




function signPromptOn()
{
    sign_up.style.visibility="visible"
    sign_p.style.display="none"
    wrongid.style.display="none"
    inputid.style.display="none"
}
function signPromptOff()
{
    sign_up.style.visibility="hidden"
}

function empty()
{
    var flag=false
    req.forEach
    (
        function(i)
        {
            if(i.value.length===0)
            flag=true
        }
    )
    return flag
}

function adduser()
{
    if(empty())
    {
        fillall.style.display="inline"
        exist.style.display="none"
    }
    else if(!validUser(req[0].value))
    {
        database.push({username:req[0].value,password:req[4].value})
        fillall.style.display="none"
        signPromptOff()
    }
    else
    {
        fillall.style.display="none"
        exist.style.display="inline"
    }
}

mode.addEventListener("click",setMode)
button.addEventListener("click",logInAfterClick)
sign_button.addEventListener("click",signPromptOn)
cut.addEventListener("click",signPromptOff)
addData.addEventListener("click",adduser);

function logInAfterClick(e)
{   
    e.preventDefault();
    if(inputLength())
    log_in(userid.value,userpassword.value)
    else
    {
        inputid.style.display="inline"
        wrongid.style.display="none"
        sign_p.style.display="none"
    }
}