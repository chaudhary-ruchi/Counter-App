let count = 0;

const display = document.getElementById("count");

const increase = document.getElementById("increase");

const decrease = document.getElementById("decrease");

const reset = document.getElementById("reset");

//Increase
increase.addEventListener("click", function() {
    count ++;
    display.textContent = count;
});

//Decrease
decrease.addEventListener("click", function(){
    if (count > 0){
        count--;
    }
    display.textContent = count;
});

//Reset
reset.addEventListener("click", function() {
    count = 0;
    display.textContent = count;
});