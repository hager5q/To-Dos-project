const inField = document.querySelector('.inField input');
const addToDO = document.querySelector('.inField button');
const toDoList =  document.querySelector(".toDoList");


inField.onkeyup = ()=>{
    let userData = inField.value ;  //getting user entered value
    if(userData.trim() != 0){ //if user values aren't only space 
        addToDO.classList.add('active'); //active the add button
    }else{
        addToDO.classList.remove('active'); //unactive the add button
    }
}

showTasks(); //calling showTasks function


//if user click on the add button 
addToDO.onclick = ()=>{
    let userData = inField.value; //getting user entered value
    let getLocalStorage = localStorage.getItem('New Todo'); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArr.push(userData); //pushing or adding userdata
    localStorage.setItem('New Todo' , JSON.stringify(listArr)); //transforming js object into a json string

    showTasks(); //calling showTasks function
} 



// function to add task list inside ul
// function showTasks(){
//     let getLocalStorage = localStorage.getItem("New Todo");
//     if(getLocalStorage == null){ //if localstorage is null
//         listArr = []; //creating blank array
//     }else{
//         listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
//     }

//     let newLiTag = '' ;
//     listArr.forEach( (element) => {
//         newLiTag += `<li>${element}<span onclick='deleteTask()';><i class="fas fa-trash"></i></span></li>
//     });`;
         

//     toDoList.innerHTML = newLiTag; //adding new li tag inside ul tag
//     inField.value = ""; //once task added leave the input field blank 
// }


// function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
    }

    let newLiTag = '' ;
    listArr.forEach( (element , index) => {
    
    newLiTag += `<li>${element}<span onclick='deleteTask(${index})';><i class="fas fa-trash"></i></span></li>`;
    });

    toDoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inField.value = ""; //once task added leave the input field blank 
}

//delete task function 
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); 

    listArr.splice(index, 1); //delete or remove the particular indexed li

    //after remove the li again update the local storage
    localStorage.setItem('New Todo' , JSON.stringify(listArr)); //transforming js object into a json string
    showTasks(); //calling showTasks function

    
}