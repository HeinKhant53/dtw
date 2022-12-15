let val;

val = document;
console.log(val);

val = document.doctype;
console.log(val);

val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.URL;
console.log(val); 


val = document.links;
console.log(val);//HTML Collection
val = document.links[0];
console.log(val);
val = document.links[3].id;
console.log(val); //delete-item1
val = document.links[3].className;
console.log(val); //delete-item1 delete-me
val = document.links[3].classList;
console.log(val); //DOMTokenList
val = document.links[3].classList[0];
console.log(val); //delete-item
val = document.links[3].classList[1];
console.log(val); //delete-me

//Form
val = document.forms;
console.log(val); //HTML Collection
val = document.forms[0];
console.log(val);
val = document.forms[0].id;
console.log(val);
val = document.forms[0].className;
console.log(val); //String
val = document.forms[0].action;
console.log(val);
val = document.forms[0].method;
console.log(val);//post


//Image
val = document.images;
console.log(val); //HTML Collection
val = document.images[0];
console.log(val);
val = document.images[0].id;
console.log(val);
val = document.images[0].className;
console.log(val);//loadiing
val = document.images[0].classList;
console.log(val);//DOMTokenList
val = document.images[0].src;
console.log(val);
val = document.images[0].alt;
console.log(val);
val = document.images[0].getAttribute("type");
console.log(val);



//Script
val = document.scripts;
console.log(val);
val = document.scripts[0];
console.log(val);
val = document.scripts[0].src;
console.log(val);
val = document.scripts[0].type;
console.log(val); //text/javascript
val = document.scripts[0].getAttribute("src");
console.log(val); //./javascript/l45documentobject.js


//Change Styling
// document.getElementById("tasktitle").style.background = "grey";
// document.getElementById("tasktitle").style.backgroundColor = "green";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "5px";


//Change Content
// document.getElementById("tasktitle").textContent = "My List";
// document.getElementById("tasktitle").textContent = '<span style="color:blue;">My Job</span>';

// document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerText = '<span style="color:blue;">My Job</span>';

// document.getElementById("tasktitle").innerHTML = "My List";
// document.getElementById("tasktitle").innerHTML = '<span style="color:blue;">My Job</span>';

// textContent , innerText --> Html code no effect
//innerHTML --> Html code effect




//Call by CLass Name
let lis = document.getElementsByClassName("list-group-item");
// console.log(lis); //HTML Collection
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[0].textContent = "Have to visit";




//Call by Tag (Element)
let lsTag = document.getElementsByTagName('li');
// console.log(lsTag);//HTML Collection
// console.log(lsTag[3]);
// lsTag[0].style.color = 'red';
// lsTag[0].innerText = 'Have to cook';




//querySelector()  <call by All>
// console.log(document.querySelector("#tasktitle"));  
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li"));
// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-child(even)").style.background = "gold";
// document.querySelector("ul li:last-of-type").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").innerHTML = "Have to red";


const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(listitems);//HTMLCollection
// console.log(typeof listitems);//Object


const listitems1 = document.querySelector("ul").querySelector(".list-group-item");
// console.log(listitems1);
// console.log(typeof listitems1);//Object

//HTMLCollection, DOMTokenLists
// listitems.forEach(listitem => {
//     console.log(listitem);
// });
// Uncaught TypeError: listitems.forEach is not a function


let arritems = Array.from(listitems);
// console.log(arritems);
// console.log(typeof arritems); //object

// arritems.forEach(function(arritem,index){
//     console.log(arritem);

//     arritem.textContent = "Hello";

//     arritem.textContent =  `${index} : Hello`;
// });






//querySelectorAll
let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its);//ul ga first li bel ya mal

let itms = document.querySelectorAll("ul.list-group li.list-group-item")
// console.log(itms);//ul --> all li <NodeList>
// console.log(itms[3]);

// itms.forEach(function(itm,idx){
//     console.log(itm);

//     itm.textContent = "Hello";

//     itm.innerText = `${idx} : Hello World`;
// });



const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);

const lievens = document.querySelectorAll("ul li:nth-child(even)");
// console.log(lievens);

// liodds.forEach(function(liodd,idx){
//     console.log(liodd);
//     liodd.style.backgroundColor = "grey";
// });

// for(let i=0; i<lievens.length; i++){
//     console.log(i);
//     console.log(lievens[i]);
//     lievens[i].style.background = "silver";
// }



//children
let chl;
const getu1 = document.querySelector("ul.list-group");
// console.log(getu1);


const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

chl = getu1.children; //HTMLCollection
// console.log(chl);
// console.log(chl[3]);


// getu1.children[1].innerText = "Have to eat";
// getu1.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item">`;


//children to children
// chl = getu1.children;//all li
// chl = getu1.children[1];
// chl = getu1.children[1].children;//a
// chl = getu1.children[1].children[0];
// chl = getu1.children[1].children[0].id;
// chl = getu1.children[1].children[0].className;
// chl = getu1.children[1].children[0].classList;
// chl = getu1.children[1].children[0].href;
// chl = getu1.children[1].children[0].getAttribute("href");
//       //ul     li         a
// chl = getu1.children[1].children[0].children;
// chl = getu1.children[1].children[0].children[0];
// console.log(chl);

// First Element Child
chl = getu1.querySelector("li");
chl = getu1.firstElementChild;
// console.log(chl);

//Last Element Child
chl = getu1.querySelector("li:last-child");
chl = getu1.lastElementChild;
// console.log(chl);



//child element count
chl = getu1.children.length;
chl = getu1.childElementCount; //5

chl = getu1.children[0].childElementCount;//1
chl = getu1.children[0].children[0].childElementCount;
// console.log(chl);//1




//Parent Element
const getFirstli = document.querySelector('li.list-group-item:first-child');
// console.log(getFirstli);//li
let par = getFirstli.parentElement;
// console.log(par);//ul




//Next Element Sibling
        //list item 1   list item 2
let sbl = getFirstli.nextElementSibling;
// console.log(sbl);

        //list item 1   list item 2   list item 3
sbl = getFirstli.nextElementSibling.nextElementSibling;
// console.log(sbl);

        //list item 1   list item 2   list item 3       list item 4         list item 5
sbl = getFirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(sbl);



//Previous Element Sibling
        //list item 1   list item 2       list item 3        list item 4
let psbl = getFirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);
//23ES







//Create Element
const newli = document.createElement("li");
// console.log(newli); 
//<li></li>


//Add ID
newli.id = "new-item";
// console.log(newli);
 //<li id="new-item"></li>

//Add class
newli.className = "list-group-item";
// console.log(newli);
 //<li id="new-item class="list-group-item"></li>

newli.className = "list-group-item delete-me";
 //<li id="new-item class="list-group-item delete-me"></li>

newli.classList.add("delete-i","hide-me");
// console.log(newli);
 //<li id="new-item class="list-group-item delete-me delete-i hide-me"></li>


//Add Attribute = setAttribute(qulifiedName,value)

newli.setAttribute("title","newitem");
// console.log(newli); 
//<li id="new-item class="list-group-item" title="newitem"></li>

//Add Text
// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item5" class="delete-item"><i class="far fa-trash-alt"></i></a>`;


//Create Text Node 
newli.appendChild(document.createTextNode("Save Myanmar"));
// console.log(newli);
//<li id="new-item class="list-group-item" title="newitem">Save Myanmar</li>


let ulEL = document.createElement("ul");
ulEL.id = "list";
// ulEL.className ="listgroup element";
ulEL.classList.add("listgroup","listitem");
ulEL.setAttribute("type","text");
// ulEL.innerHTML =`Hello`;
// ulEL.append(document.createTextNode("Hey"))
console.log(ulEL);


const newLink = document.createElement('a');

// newLink.href ="#";
// newLink.id="delete-item6";
// newLink.classList.add("delete-item");
// newLink.innerHTML = `<i class="far fa-trash-alt"></i>`;
// newli.appendChild(newLink);
// console.log(newLink);
// document.querySelector("ul.list-group").appendChild(newli);


//Replace Element

const newtitleh2 = document.createElement("h2");
newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode('All My Lists');
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);
//<h2 id="tasktitle">All My Lists</h2>


const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);
// <h4 id="tasktitle">Tasks</h4> 


// replaceChild(new,odd);
const getcardaction = document.querySelector(".card-action");
getcardaction.replaceChild(newtitleh2,oldtitleh4);



//remove element (self)
const getLis = document.querySelectorAll("li");
// console.log(getLis); //NodeList(6)
// getLis[0].remove();
// getLis[5].remove();


//Remove  Child Element
const getfirstul = document.querySelector("ul");
// console.log(getfirstul);

// getfirstul.remove();

// getfirstul.removeChild(getLis[4]);
// getfirstul.removeChild(getLis[0]);



//className vs classList

const firstli = document.querySelector("li:first-child");
// console.log(firstli); //li
// console.log(firstli.children); //a HTML Collection
// console.log(firstli.children[0]);//a


let firstlink;
                //a
firstlink = firstli.children[0];
// console.log(firstli.children[0].className);

//a
// firstlink.className = "delete-myself"; //String
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item  delete-me delete-myself";


// firstlink = firstlink.classList; //DOM Token List
// console.log(firstlink);
// console.log(firstlink[0]);
// console.log(firstlink[1]);

//a
// firstlink.classList.add("delete-ourserve");
// firstlink.classList.add("delete-myself");
// firstlink.classList.add("delete-myself","delete-ourserve");

// firstlink.className = "delete-item delete-me delete-myself delete-ourserve";
// firstlink.className = "delete-item delete-me delete-myself";


// remove class 
// firstlink.classList.remove("delete-myself");
// firstlink.classList.remove("delete-myself","delete-ourserve");


//replace(odd,new)
// firstlink.className = "delete-item delete-myself";
// firstlink.classList.replace("delete-me","delete-myself");
// firstlink.classList.replace("delete-item","delete-ourserve");


// if(firstlink.classList.contains("delete-myself")){
//         console.log("yes");
// }else{
//         console.log("no");
// }
// //yes

// if(firstlink.className == "delete-myself"){
//         console.log("yes");
// }else{
//         console.log("no");
// }
//no

//24CT


//Attribute
//a
let getatt = firstlink.href;
// console.log(getatt);
// http://127.0.0.1:5500/l45documentobject.html#

getatt = firstlink.getAttribute("href");
// console.log(getatt); //#

firstlink.setAttribute("href","https://google.com");


getatt = firstlink.hasAttribute("href");
// console.log(getatt); //true
getatt = firstlink.hasAttribute("title");
// console.log(getatt); //false





//addEventListener(eventype,function)
const clearbtn = document.querySelector(".clear-tasks");

//Method1
// clearbtn.addEventListener('click',function(){
//         console.log("hay i am working");
// });

// Method2
// clearbtn.addEventListener('click',myclick);
// function myclick(){
//         console.log("I AM WORKING");
// }

// clearbtn.addEventListener('click',function(e){
        // console.log(e);//return Pointer Event
        // console.log(e.target); 
// <a href="#" id="clear-id" class="clear-tasks">Clear Tasks</a>
        // console.log(this);

//         //e.target = this;

        // e.preventDefault();

        // let val;
        // val = e.target.className;
        // val = e.target.classList; //DOM Token List
        // val = e.target.id;
        // // console.log(val);

//         e.target.innerText = "Finished";



//         //Event Type
//         val = e.type;
//         console.log(val);//click

//         //Coordinates event <Relative to Window>
//         val = e.clientX;
//         console.log(val);//381

//         val = e.clientY;
//         console.log(val);//375

//         //Coordinates event <Relative to Element>
//         val = e.offsetX;
//         console.log(val);//5

//         val = e.offsetY;
//         console.log(val);//3

// });

// clearbtn.addEventListener('click',(e)=>{
        // console.log(e);//return Pointer Event
        // console.log(e.target); 
//a href="#" id="clear-id" class="clear-tasks">Clear Tasks</a>
        // console.log(this);
        //window --> arrow function
// });



//MouseEvent
const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
// // const 
// const headingh2 = document.querySelector("h2");

// //single click
// clbtn.addEventListener('click',mouseeventtype);

// //double click
// clbtn.addEventListener('dblclick',mouseeventtype);

// //mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

// //mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

// //mouseenter
// card.addEventListener("mouseenter",mouseeventtype);

// //mouseover --> (action to each childs mouse hover)
// card.addEventListener("mouseover",mouseeventtype);

// //mouseleave
// card.addEventListener("mouseleave",mouseeventtype);

// //mouseout --> (action to each childs mouse out)
// card.addEventListener("mouseout",mouseeventtype);



// //mousemove
// card.addEventListener("mousemove",mouseeventtype);






function mouseeventtype(e){
        console.log(`Event Type = ${e.type}`);


//         headingh2.textContent = `MouseX: {e.clientX} MOuseY:${e.clientY}`;

//         headingh2.textContent = `MouseX: {e.offsetX} MOuseY:${e.offsetY}`;

//         document.body.style.background = `rgba(${e.offsetX},${e.offsetY},${e.offsetX})`
        
}



//submit()

// const formel = document.querySelector("form");

// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
//         console.log(`Event Type = ${e.type}`);

//         e.preventDefault();
// }


const inputtask = document.getElementById("task");
const geth2 = document.querySelector("h2");

//keydown
// inputtask.addEventListener('keydown',inputeventtype);

//keypress   
// inputtask.addEventListener('keypress',inputeventtype);

// keydown == keypress

//keyup
// inputtask.addEventListener('keyup',inputeventtype);

// input
// inputtask.addEventListener('input',inputeventtype);

//keyup == input

//focus
// inputtask.addEventListener('focus',inputeventtype);


//blur  --> focus out
// inputtask.addEventListener('blur',inputeventtype);


//cut --> textbox ka text ko rightclick+cut lote yin work
// inputtask.addEventListener('cut',inputeventtype);

//paste --> textbox ka text ko rightclick+paste lote yin work
// inputtask.addEventListener('paste',inputeventtype);



// function inputeventtype(e){
//         console.log(`Event Type = ${e.type}`);

//         // console.log(inputtask.value);
//         // geth2.textContent = inputtask.value;

//         console.log(e.target.value);
//         geth2.innerText = e.target.value;
// }


//Event Bubbling

document.querySelector('.card-title').addEventListener('click',function(){
        console.log('i am card-title');
});

// document.querySelector('.card-content').addEventListener('click',function(){
//         console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//         console.log('i am card');
// });


//30EB



//Event Delegation

const deleitem = document.querySelector(".delete-item");

// deleitem.addEventListener("click",deleteitem);

// function deleteitem(e){
//         console.log("i am delete item");
//         console.log(e.target);
//         // <i class="far fa-trash-alt">...</i>
//         e.preventDefault(); //code kill
// }


// document.body.addEventListener('click',evendeleg);

// function evendeleg(e){
        // console.log('i am working');
        // console.log(e.target);

        //i
        // if(e.target.className === 'far fa-trash-alt'){
        //         console.log('hay i am trash can');
        // }

        //i a
        // if(e.target.parentElement.className == "delete-item"){
        //         console.log("hay i am delete item by a tag");
        // }


        //i a
        // if(e.target.parentElement.className == "delete-item delete-me"){
        //         console.log("hay i am delete item by a tag");
        // }


        //i a
//         if(e.target.parentElement.classList.contains('delete-item')){
//                 console.log("hay i am delete item by a tag");
        
//                 //i
//                 e.target.remove();

//                 //i             a
//                 e.target.parentElement.remove();

//                 //i          a               li
//                 e.target.parentElement.parentElement.remove();

//         }
//         e.preventDefault();
// }

//1.Step

// document.querySelector("form").addEventListener("submit",function(e){
        
//         const getnewtask = document.getElementById("task").value;
//         // console.log(getnewtask);

//         localStorage.setItem('mytask',getnewtask);
//         //key is only one value <Override>

//         //key put many values
//         let alltasks = []; //another value --> put empyt array create 
//         alltasks.push(getnewtask);
//         console.log(alltasks);
//         //['have to eat'] 
//         //['have to drink] -->ta ku chin si win nay tay

//         e.preventDefault();
// });



//2.Step

// document.querySelector("form").addEventListener("submit",function(e){
        
//         const getnewtask = document.getElementById("task").value;
//         // console.log(getnewtask);


//         let alltasks; //undefined

//         if(localStorage.getItem('mytasks') === null){
//                 alltasks = [];
//         }

//         alltasks.push(getnewtask);
//         localStorage.setItem('mytasks',alltasks); //array type put localStorage
//         console.log(alltasks);
//         //['have to eat'] 
//         //['have to drink] -->ta ku chin si win nay tay

//         e.preventDefault();
// });




//3.Step

// document.querySelector("form").addEventListener("submit",function(e){
        
//         const getnewtask = document.getElementById("task").value;
//         // console.log(getnewtask);


//         let alltasks; //undefined

//         if(localStorage.getItem('mytasks') === null){
//                 alltasks = [];
//         }

//         alltasks.push(getnewtask);//2.have to cook --> alltasks ka no array 
//         localStorage.setItem('mytasks',JSON.stringify(alltasks));
//         console.log(alltasks);
//         //['have to eat'] 
//         //['have to drink] -->ta ku chin si win nay tay

//         e.preventDefault();
// });





//4.Step
document.querySelector("form").addEventListener("submit",function(e){
        e.preventDefault();
        // console.log("hay i am working");

        const getnewtask = document.getElementById("task").value;
        // console.log(getnewtask);

        // localStorage.setItem('mytask',getnewtask);

        let alltasks;

        if(localStorage.getItem("mytasks") === null){
                alltasks = [];
        }else{
                alltasks = JSON.parse(localStorage.getItem("mytasks"));
        }

        //["have to eat"]
        alltasks.push(getnewtask);

        //["have to eat","have to  cook"]
        localStorage.setItem("mytasks",JSON.stringify(alltasks));

        console.log(alltasks);
});

console.log(localStorage.getItem("mytasks"));
console.log(typeof localStorage.getItem("mytasks"));

console.log(JSON.parse(localStorage.getItem("mytasks")));
console.log(typeof JSON.parse(localStorage.getItem("mytasks")));

