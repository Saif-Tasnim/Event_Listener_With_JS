// option--> 2
function makeRed(){
    document.body.style.backgroundColor = "red";
}

// option--> 3 
const make = document.getElementById('make-blue');
make.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// option--> 3 (another part)
const make2 = document.getElementById('make-green');
make2.onclick = function makeGreen(){
    document.body.style.backgroundColor = "green";
}


const make3 = document.getElementById('make-purple');
make3.addEventListener('click', makePurple);
function makePurple(){
    document.body.style.backgroundColor = "purple";
}


//  we will use this format --. important
const make4 = document.getElementById('make-pink');
make4.addEventListener('click',function(){
    document.body.style.backgroundColor = "pink";
})

const make5 = document.getElementById('gold');
make5.addEventListener('click',function(){
    document.body.style.backgroundColor = "gold";
})