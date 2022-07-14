
// get ElementById
const nameIn = document.getElementById('name_input');
const nameOut = document.getElementById('name_output');
const url = document.getElementById('info1');
const userFeelingsIn = document.getElementById('feelingsInput');
const userFeelingsOut = document.getElementById('feelingsOutput');

//functions to apply
function personalize(){
    nameOut.value = nameIn.value;
};


//eventListeners
nameIn.addEventListener("keyup", personalize);

userFeelingsIn.addEventListener("click", ()=>{
    userFeelingsOut.className="show";
})
