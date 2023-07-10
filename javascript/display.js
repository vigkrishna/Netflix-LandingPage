let ques = document.getElementsByClassName("ques");
let ans = document.getElementsByClassName("ans");
let plus = document.querySelectorAll(".ques img");

// Function to Display answer for the question.
for(let i=0; i < ques.length; i++){
    ques[i].onclick = function open(){
        if(ans[i].style.display == "block"){
            ans[i].style.display = "none";
            plus[i].style.transform = "rotate(0deg)";
        }
        else{
            ans[i].style.display = "block";
            plus[i].style.transform = "rotate(45deg)";
        }
    }
}