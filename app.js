const firstInput = document.getElementById("work1");
const secondInput = document.getElementById("work2");
const btnadd = document.getElementById("add");
const btnsub = document.getElementById("sub");
const btndiv = document.getElementById("div");
const btnmul = document.getElementById("mul");
const btnsquR = document.getElementById("squR");
const btnsqr = document.getElementById("sqr");

const answer = document.getElementById("answer");

function sumOf(first, sec){
    let sum = Number(first) + Number(sec);
    return sum
}

function subMe(first, sec){
    let diff = Number(first) - Number(sec);
    return diff;
}

function divme(first, sec){
    let div = Number(first) / Number(sec);
    return div;
}

function mulme(first, sec){
    let mul = Number(first) * Number(sec);
    return mul;
}

function squRMe(first){
    let sqr = Number(first) / Number(2);
    return sqr;
}

function sqrMe(first){
    let sqr = Number(first) * Number(first);
    return sqr;
}

function displayAnswer1(){
    answer.innerText = sumOf(firstInput.value, secondInput.value);
}

function displayAnswer2(){
    answer.innerText = subMe(firstInput.value, secondInput.value);
}

function displayAnswer3(){
    answer.innerText = divme(firstInput.value, secondInput.value);
}

function displayAnswer4(){
    answer.innerText = mulme(firstInput.value, secondInput.value);
}

function displayAnswer5(){
    answer.innerText = squRMe(firstInput.value, secondInput.value);
}

function displayAnswer6(){
    answer.innerText = sqrMe(firstInput.value, secondInput.value);
}

btnadd.addEventListener("click", displayAnswer1);
btnsub.addEventListener("click", displayAnswer2);
btndiv.addEventListener("click", displayAnswer3);
btnmul.addEventListener("click", displayAnswer4);
btnsquR.addEventListener("click", displayAnswer5);
btnsqr.addEventListener("click", displayAnswer6);