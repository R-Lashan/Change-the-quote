const btn_tag = document.getElementById("click");
const text_h1 = document.getElementById("text2");

function click(){
    btn_tag.addEventListener('click',function(){
        text();
    }
)}

click();

function text(){
    if(text_h1.innerHTML == "Change the life to sucessful person"){
        text_h1.innerHTML = "Your The Best And Luciest";
    } 
    else if(text_h1.innerHTML == "Your The Best And Luciest"){
        text_h1.innerHTML = "Motivate Your Life"
    } 
    else if(text_h1.innerHTML == "Motivate Your Life"){
        text_h1.innerHTML = "Drawing Your Future With Passion"
    }
    else {
        text_h1.innerHTML = "Change the life to sucessful person"
    }
}

