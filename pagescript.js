var mode = document.querySelector(".mode")
var body = document.querySelector("body")
var searchbox = document.getElementById("id")
var fixed = document.querySelector(".fixed")
var box_color = document.querySelectorAll(".box_color_align")
var fruit_box = document.querySelector(".fruit_box")
var dark=false

function setMode()
{
    if(dark)
    {
        body.style.backgroundColor = "#F0F2F5"
        mode.style.backgroundColor = "#1d2129"
        fixed.style.backgroundColor = "#b3b3b3"
        box_color.forEach
        (
            (e)=>{
            e.style.backgroundColor="#FFFFFF";
            }
        )
        dark = false
    }
    else
    {
        body.style.backgroundColor = "#1d2129"
        mode.style.backgroundColor = "#F0F2F5"
        fixed.style.backgroundColor = "#ffa600"
        box_color.forEach
        (
            (e)=>{
            e.style.backgroundColor="#F0F2F5";
            }
        )
        dark = true
    }
}
// function addfruit()
// {
//     fruit_box.innerHTML+=
//     `<div class="fruit box_color_align">
//     <h2 class="fruitname">R | 100</h2>
//     <img src="icon.png" class="image">
//     <button class="removebag">-</button>
//     <button class="addbag">+</button>
//     </div>"`
// }
// function display(e)
// {
//     if(e.key==="Enter")
//     {
//         if(searchbox.value.length>0)
//         {
//             console.log(searchbox.value)
//             addfruit()
//         }
//     }
//     else
//     {
//         console.log(searchbox.value+e.key)
//         addfruit()
//     }
// }
// searchbox.addEventListener("keypress",display)
mode.addEventListener("click",setMode)