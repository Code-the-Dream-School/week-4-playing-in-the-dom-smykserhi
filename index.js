//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
console.log ("page loaded")
const divA1 = document.querySelector("#a-1");
let newContent = document.createElement('div')
newContent.textContent = "X"
newContent.className = "square"
divA1.appendChild(newContent);
newContent.addEventListener("click" , (event) =>{ //changing text content by mouse clicking
    if(event.target.textContent === "X") event.target.textContent = "0";
    else event.target.textContent = "X";
})



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'


const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];






//resolve // QUESTION 2 here
const divA2 = document.getElementById('a-2');
let newContentA2 = document.createElement('select') // create new select element
newContentA2.className = "colors"
for(let i =0 ;i < colors.length; i++){ // create select options
    newContentA2.innerHTML += `<option value="${i}">${colors[i]}</option>`
}
divA2.appendChild(newContentA2);
let task2Button = document.createElement('button'); // create new button
task2Button.textContent = "Remove";
divA2.appendChild(task2Button);
task2Button.addEventListener("click", () =>{
    let selectedElement = newContentA2.selectedIndex; // stored which element selected
    newContentA2.options.remove(selectedElement) // remove it from list    
})





//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
    const radius = document.getElementById('radius');
    console.log("radius click")
    const volume = document.getElementById('volume');
    const area = document.getElementById("area");
    const radiusValue = +radius.value;   
    let volumeResult = (4/3) * Math.PI * Math.pow(radiusValue, 3) //((4/3) × π × r^3)
    let areaResult = 4 * Math.PI * Math.pow(radiusValue , 2)  //(4 × π × r^2)
    volume.value = volumeResult
    area.value = areaResult
    return false    //  ????????????????????????????????????????????????????????
 }
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 



//resolve // QUESTION 4 here
//function hide or show up 'el' element on e page
function hideQuestion(el){
    if(el.style.display != "none") el.style.display = "none"
    else el.style.display = "block";
}
const divA3 = document.getElementById('a-3');
const divA4 = document.getElementById('a-4');
const hideButton1 = document.createElement('button');
hideButton1.textContent = "Hide Question 1";
hideButton1.style.marginLeft = "5px"
const hideButton2 = document.createElement('button');
hideButton2.textContent = "Hide Question 2";
hideButton2.style.marginLeft = "5px"
const hideButton3 = document.createElement('button');
hideButton3.textContent = "Hide Question 3";
hideButton3.style.marginLeft = "5px"
divA4.appendChild(hideButton1)
divA4.appendChild(hideButton2)
divA4.appendChild(hideButton3)
hideButton1.addEventListener("click" , function(){hideQuestion(divA1)}); // call function on click
hideButton2.addEventListener("click" , function(){hideQuestion(divA2)});
hideButton3.addEventListener("click" , function(){hideQuestion(divA3)});