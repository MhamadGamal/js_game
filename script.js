"use strict"

let arr = [1,2,3,4,5,6,6,5,4,3,2,1];
let back = document.getElementsByClassName('back');
let front = document.getElementsByClassName('front');
let cell = document.getElementsByClassName('cell')
let x   ,
    i   ,
    elem1,
    elem2, 
    counter = 1,
    rest_btn,
    closed_div;

// fll data randomly
for( i =0; i< arr.length; i++){
    back[i].innerHTML = arr[i]
}

//click event
for(let x = 0; x < cell.length; x++){
    //cell[0].addEventListener('click', cFun);
    cell[x].addEventListener('click', cFun);
   
}
function cFun() {
    counter ++;
    console.log(counter);
    if(counter <= 3){
        this.classList.add('hovered') ;
        this.children[0].style.zIndex = 0;
        this.children[1].style.zIndex = 1;
        this.removeEventListener('click', cFun);
        elem1 = document.getElementsByClassName('hovered')[0];
        elem2 = document.getElementsByClassName('hovered')[1]; 
        if(counter == 3){
            match(elem1,elem2);
            counter = 1;
        }
   }
}




function match(x,y){
    
    if (x.children[1].innerText == y.children[1].innerText){
            x.classList.add('closed');   
            x.classList.remove('hovered');
            y.classList.add('closed');   
            y.classList.remove('hovered');
               
    }
    else{
        
        setTimeout(function(){

            x.classList.remove('hovered') ;
            x.children[0].style.zIndex = 1;
            x.children[1].style.zIndex = 0;
            y.classList.remove('hovered') ;
            y.children[0].style.zIndex = 1;
            y.children[1].style.zIndex = 0;
            x.addEventListener('click', cFun);
            y.addEventListener('click', cFun);
            
        },200)
    }
}
/********************************  == Reset button == ************************************************ */
rest_btn = document.getElementsByClassName('btn')[0];
closed_div = document.getElementsByClassName('closed');
let closed_div_arr = []
rest_btn.addEventListener('click',  function() {
    console.log(closed_div)
    
    for(let g = 0; g < closed_div.length; g++){
        closed_div_arr[g] = closed_div[g]
    }

    closed_div_arr.forEach(item =>{
        item.classList.remove('closed')
        item.children[0].style.zIndex = 1;
        item.children[1].style.zIndex = 0;
    })
    
})